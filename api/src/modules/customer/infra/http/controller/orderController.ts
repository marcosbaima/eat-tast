import {Request,Response} from 'express';
import {  getRepository } from 'typeorm';
import Orders from '@modules/customer/service/CreateOrderService';
import Item from '@modules/customer/infra/typeorm/models/Item';
import Restaurant from '@modules/customer/infra/typeorm/models/Restaurant';
import { container } from 'tsyringe';


export default class orderController{
    public async create(request:Request, response:Response):Promise<Response> {
        try{
            const customer_id:any = request.query.userId;
            const restaurant_id = request.params.id;

            const restaurant:any = await getRepository(Restaurant).findOne({
                where: { id: restaurant_id }
            });

            let { items } = request.body;

            //@ts-ignore
            const items_id = items.map(item => item.item_id);
            //@ts-ignore
            const items_quantity = items.map(item => item.quantity)

            const itemTitle = [];
            const itemDescription = [];

            //@ts-ignore 
            for (i in items_id) {
                const item = await getRepository(Item).findOne({
                  where: { 
                    //@ts-ignore 
                    id: items_id[i],
                    restaurant_id  
                  }
                });
                if (!item) {
                    //@ts-ignore 
                    return response.json({ error: `Item ${items_id[i]} not exits`});
                }
            
                  itemTitle.push(item.title)
                  itemDescription.push(item.description);
            }

            //@ts-ignore 
            for (i in itemTitle) {
                //@ts-ignore 
                items[i].item_name = itemTitle[i]
            }
        
            //@ts-ignore 
            for (i in itemDescription) {
                //@ts-ignore 
                items[i].item_description = itemDescription[i]
            }
        
            let itemsPrice = [];
            //@ts-ignore
            for (i in items_id) {

                const item:any = await getRepository(Item).findOne({
                //@ts-ignore    
                where: { id: items_id[i] }
                });
                
                itemsPrice.push(item.price);
            }
        
            let itemQuantitySum =  [];
            //@ts-ignore
            for (i in itemsPrice) {
                //@ts-ignore
                itemQuantitySum[i] = itemsPrice[i] * items_quantity[i]
            }

            //@ts-ignore
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
        
            let subtotal:any = itemQuantitySum.reduce(reducer);
            subtotal = Math.round((subtotal + Number.EPSILON) * 100) / 100;
        
            let total = itemQuantitySum.reduce(reducer, restaurant.delivery_price); 
            total = Math.round((total + Number.EPSILON) * 100) / 100;
        
            // For orders under R$15 add a R$ 1.50 fee to order
            let smallOrder:any;
            subtotal < 15 ? smallOrder = 1.50 : smallOrder = 0;
        
            // Service fee (5% of subtotal) 
            const serviceFee = ((subtotal * 5) / 100).toFixed(2);
        
            const totalFees:any = parseFloat(smallOrder) + parseFloat(serviceFee);
            total += totalFees;

            const orders = container.resolve(Orders);
        
            const order = await orders.execute({
                customer_id: customer_id,
                restaurant_id,
                items,
                subtotal,
                fees: totalFees,
                delivery_price: restaurant.delivery_price,
                total
            })
        
            return response.json(order);
                
          
        }catch (err){
            return response.status(400).json({error:err.message});
        }
    }
}
