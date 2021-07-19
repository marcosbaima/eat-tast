import {inject,injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Restaurant from '@modules/customer/infra/typeorm/models/Restaurant';
import IRestaurantRepository from '../Repositories/IRestaurantRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface Request {
    name:string;
    email:string;
    password_hash?:any;
    description?:string;
    restaurant_name:string;
    restaurant_address:string;
    restaurant_city:string;
    culinary:string;
    delivery_price:number;
    logo_path:string;
    banner_path:string;
}
@injectable()
class CreateRestaurantService{
    constructor(
        @inject('RestaurantRepository')
        private restaurantRepository:IRestaurantRepository,

        @inject('HashProvider')
        private hashProvider:IHashProvider,)

        {}
        public async execute({
            name,
            email,
            password_hash,
            restaurant_name,
            description,
            restaurant_address,
            restaurant_city,
            culinary,
            delivery_price,
            logo_path,
            banner_path,
        }:Request): Promise<Restaurant>{
            const check = await this.restaurantRepository.findByEmail(
                email,  
            );
            if (!check) {
                throw new AppError('Custome does not Exist');
            }

            const hashedPassword = await this.hashProvider.generateHash(password_hash);

            const Createcustomer = this.restaurantRepository.create({
                name,
                email,
                password_hash:hashedPassword,
                restaurant_name,
                restaurant_address,
                restaurant_city,
                culinary,
                delivery_price,
                logo_path,
                banner_path,
                description,
            });

            return Createcustomer;
        }
}

export default CreateRestaurantService;

