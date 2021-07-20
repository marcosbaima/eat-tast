import { getRepository, Repository } from 'typeorm';
import IRestaurantRepository from '@modules/customer/Repositories/IRestaurantRepository';
import IRestaurantDTO from '@modules/customer/dtos/ICreateRestaurantDTO';
import Restaurants from '@modules/customer/infra/typeorm/models/Restaurant';
import Restaurant from '@modules/customer/infra/typeorm/models/Restaurant';

class RestaurantRepository implements IRestaurantRepository{
    private ormRepository:Repository<Restaurants>;
    constructor(){
        this.ormRepository=getRepository(Restaurants);
    }

    public async findById(id:string): Promise<Restaurants | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{id}
        });
        return findSubs;
    }

    public async findByEmail(email:string): Promise<Restaurants | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{email}
        });
        return findSubs;
    }
    public async findByMarket(marketplaceId:string): Promise<Restaurants | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{marketplaceId}
        });
        return findSubs;
    }
    public async create({
        name,
        email,
        password_hash,
        description,
        restaurant_name,
        restaurant_address,
        restaurant_city,
        culinary,
        delivery_price,
        logo_path,
        banner_path,
}:IRestaurantDTO):Promise<Restaurant | any>{
            const subs=this.ormRepository.create({
                name,
                email,
                password_hash,
                description,
                restaurant_name,
                restaurant_address,
                restaurant_city,
                culinary,
                delivery_price,
                logo_path,
                banner_path});

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
        public async save(subs:Restaurants):Promise<Restaurants>{
            await this.ormRepository.save(subs)
            return subs;
        }
        public async find(subs:Restaurants):Promise<Restaurants>{
            await this.ormRepository.find(subs);
            return subs;
        }
}

export default RestaurantRepository;
