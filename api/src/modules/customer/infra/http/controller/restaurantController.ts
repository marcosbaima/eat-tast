import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Restaurants from '@modules/customer/infra/typeorm/models/Restaurant';
import Restaurant from '@modules/customer/service/CreateRestaurantService';
import { container } from 'tsyringe';
export default class restaurantController{
    public async show(request:Request, response:Response):Promise<Response> {
    
        
        const restaurants =  await getRepository(Restaurants);

        return response.json({ restaurants });

     
    } 
    public async create(request:Request, response:Response):Promise<Response> {
        try{
            const {
                name,
                email,
                password,
                description,
                restaurant_name,
                restaurant_address,
                restaurant_city,
                culinary,
                delivery_price,
                logo_path,
                banner_path,
            } = request.body
            
            const restaurant= container.resolve(Restaurant)

            const createRestaurant = restaurant.execute({
                name,
                email,
                password_hash:password,
                description,
                restaurant_name,
                restaurant_address,
                restaurant_city,
                culinary,
                delivery_price,
                logo_path,
                banner_path,
            })

            return response.status(200).json(createRestaurant)

        }catch (err){
            return response.status(400).json({error:err.message});
        }
        
    }
}


