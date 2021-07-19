import { Router,Request, Response} from 'express';

import CreateCustomerService from '@modules/customer/service/CreateCustomerService';

import {container} from 'tsyringe';


export default class customerController{
    public async create(request:Request, response:Response):Promise<Response> {
    
        try{ 
            const {           
                name,             
                email,
                password,
                address,
                district,
            } = request.body;
            const create = container.resolve(CreateCustomerService);
    
            const apiowner = await create.execute({
                name,             
                email,
                password,
                address,
                district,
            });
            return response.json(apiowner);
            } catch (err) {
                return response.status(400).json({error:err.message});
            }
    } 
}
  
