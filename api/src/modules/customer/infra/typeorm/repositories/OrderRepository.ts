import { getRepository, Repository } from 'typeorm';
import IOrderRepository from '@modules/customer/Repositories/IOrderRepository';
import IOrderDTO from '@modules/customer/dtos/ICreateOrderDTO';
import orders from '@modules/customer/infra/typeorm/models/Order';
import order from '@modules/customer/infra/typeorm/models/Order';

class OrderRepository implements IOrderRepository{
    private ormRepository:Repository<orders>;
    constructor(){
        this.ormRepository=getRepository(orders);
    }

    public async findById(id:string): Promise<orders | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{id}
        });
        return findSubs;
    }


    public async findByEmail(email:string): Promise<orders | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{email}
        });
        return findSubs;
    }
    public async findByMarket(customer_id:string): Promise<orders | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{customer_id}
        });
        return findSubs;
    }
    public async create({
        customer_id,
        restaurant_id,
        items,
        subtotal,
        fees,
        delivery_price,
        total,}:IOrderDTO):Promise<orders>{
            const subs=this.ormRepository.create({
                customer_id,
                restaurant_id,
                items,
                subtotal,
                fees,
                delivery_price,
                total
            });

                await this.ormRepository.save(subs);

                return subs;
        }
        public async delete(id:string): Promise<any>{

            const find = await this.ormRepository.findOne({
                where:{id}
            });
            //@ts-ignore>
            const findSubs=await this.ormRepository.delete(find)
           // return 0;
        }
        public async save(subs:orders):Promise<orders>{
            await this.ormRepository.save(subs)
            return subs;
        }
        public async find(subs:orders):Promise<orders>{
            await this.ormRepository.find(subs);
            return subs;
        }
}

export default OrderRepository;
