import {inject,injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';
import customer from '@modules/customer/infra/typeorm/models/Customer';
import ICustomerRepository from '../Repositories/ICustomerRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface Request {
    name:string;             
    email:string;
    password_hash:any;
    address:string;
    district:string;
}
@injectable()
class CreateCustomerService{
    constructor(
        @inject('CustomerRepository')
        private customerRepository:ICustomerRepository,

        @inject('HashProvider')
        private hashProvider:IHashProvider,)

        {}
        public async execute({
            name,             
            email,
            password_hash,
            address,
            district,
        }:Request): Promise<customer>{
            const check = await this.customerRepository.findByEmail(
                email,  
            );
            
            if (check) {
                throw new AppError('Customer Exists');
            }

            const hashedPassword = await this.hashProvider.generateHash(password_hash);
            console.log(hashedPassword)
            const Createcustomer = this.customerRepository.create({
                name,             
                email,
                password_hash:hashedPassword,
                address,
                district,
            });

            return Createcustomer;
        }
}

export default CreateCustomerService;

