
import { Request, Response} from 'express';

import { getRepository } from 'typeorm';

import customer from '@modules/customer/infra/typeorm/models/Customer';

import Order from '@modules/customer/infra/typeorm/models/Order';


export default class customesRestaurantController{
    public async show(request:Request, response:Response):Promise<Response> {

        const userId=request.query.userId; 

        const Custumer =  await getRepository(customer).findOne({ where: { id: userId }});

        if (!Custumer){
            return response.status(400).json({ error: 'This customer not exists' });
        }

        const pastOrders = await getRepository(Order).find({where: {customer_id:userId}})


        return response.json({ customer, pastOrders });
        
    } 
}
