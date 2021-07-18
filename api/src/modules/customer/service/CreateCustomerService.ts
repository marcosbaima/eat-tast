import {inject,injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';
import customer from '@modules/customer/infra/typeorm/models/Customer';
import ICustomerRepository from '../Repositories/ICustomerRepository';

interface Request {
    name:string;             
    email:string;
    password:string;
    address:string;
    district:string;
}
@injectable()
class CreateCustomerService{
    constructor(
        @inject('CustomerRepository')
        private customerRepository:ICustomerRepository){}
        public async execute({
            name,             
            email,
            password,
            address,
            district,
        }:Request): Promise<customer>{
            const check = await this.customerRepository.findByEmail(
                email,  
            );
            if (check) {
                throw new AppError('Api Owner Exist');
            }
            const Createcustomer = this.customerRepository.create({
                name,             
                email,
                password,
                address,
                district,
            });

            return Createcustomer;
        }
}

export default CreateCustomerService;

