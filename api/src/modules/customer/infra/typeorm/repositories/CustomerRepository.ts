import { getRepository, Repository } from 'typeorm';
import ICustomerRepository from '@modules/customer/Repositories/ICustomerRepository';
import ICustomerDTO from '@modules/customer/dtos/ICreateCustomerDTO';
import customers from '@modules/customer/infra/typeorm/models/Customer';
import customer from '@modules/customer/infra/typeorm/models/Customer';

class CustomerRepository implements ICustomerRepository{
    private ormRepository:Repository<customers>;
    constructor(){
        this.ormRepository=getRepository(customers);
    }

    public async findById(id:string): Promise<customers | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{id}
        });
        return findSubs;
    }


    public async findByEmail(email:string): Promise<customers | undefined>{
        console.log("xxxxxx");
        const findSubs=await this.ormRepository.findOne({
            where:{email}
        });
        return findSubs;
    }
    public async findByMarket(marketplaceId:string): Promise<customers | undefined>{
        const findSubs=await this.ormRepository.findOne({
            where:{marketplaceId}
        });
        return findSubs;
    }
    public async create({

        name,             
        email,
        password_hash,
        address,
        district,

}:ICustomerDTO):Promise<customers>{
            const subs=this.ormRepository.create({
                name,             
                email,
                password_hash,
                address,
                district,
        
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
        public async save(subs:customers):Promise<customers>{
            await this.ormRepository.save(subs)
            return subs;
        }
        public async find(subs:customers):Promise<customers>{
            await this.ormRepository.find(subs);
            return subs;
        }
}

export default CustomerRepository;
