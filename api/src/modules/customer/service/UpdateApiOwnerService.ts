import {inject,injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';
import apiOwner from '@modules/apiOwner/infra/typeorm/models/apiOwner';
import IApiOwnerRepository from '../Repositories/IApiOwnerRepository';

interface Request {
    marketplaceId: string;           
    description: string;             
    mmc: string; 
    created_at: Date; 
    updated_at: Date; 
}
@injectable()
class UpdateApiOwnerService{
    constructor(
        @inject('ApiRepository')
        private apiOwnerRepository:IApiOwnerRepository){}
        public async execute({
            marketplaceId,           
            description,             
            mmc,
            created_at,
            updated_at,
        }:Request): Promise<apiOwner>{
            const check = await this.apiOwnerRepository.findByMarket(
                marketplaceId,  
            );
            if (!check) {
                throw new AppError('Api doesnt Exist');
            }
            
            check.marketplaceId=marketplaceId;          
                check.description=description;             
                check.mmc=mmc;
                
            

            return this.apiOwnerRepository.save(check);
        }
}

export default UpdateApiOwnerService;

