import {inject,injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Order from '@modules/customer/infra/typeorm/models/Order';
import IOrderRepository from '../Repositories/IOrderRepository';

interface Request {
    customer_id: string;
    restaurant_id:string;
    items:string[];
    subtotal:string;
    fees:string;
    delivery_price: string;
    total:string;
}
@injectable()
class CreateOrderService{
    constructor(
        @inject('OrderRepository')
        private orderRepository:IOrderRepository){}
        public async execute({
            customer_id,
            restaurant_id,
            items,
            subtotal,
            fees,
            delivery_price,
            total
        }:Request): Promise<Order>{
            const check = await this.orderRepository.findById(
                customer_id,  
            );
            if (!check) {
                throw new AppError('customer does not  Exist');
            }
            const Createcustomer = this.orderRepository.create({
                customer_id,
                restaurant_id,
                items,
                subtotal,
                fees,
                delivery_price,
                total
            });

            return Createcustomer;
        }
}

export default CreateOrderService;

