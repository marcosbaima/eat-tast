import {inject,injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IMenuRepository from '../Repositories/IMenuRepository';

interface Request {
    id:string;             
}
@injectable()
class MenuService{
    constructor(
        @inject('CustomerRepository')
        private customerRepository:IMenuRepository){}
        public async execute({
            id
        }:Request): Promise<any>{
            const check = await this.customerRepository.findById(
                id,  
            );
            if (!check) {
                throw new AppError('menu does not exist');
            }
            //@ts-ignore
            const Createcustomer = this.customerRepository.delete({
               id
            });

            
        }
}

export default MenuService;

