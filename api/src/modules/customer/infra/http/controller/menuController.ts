import { Router,Request, Response} from 'express';
import { getRepository } from 'typeorm';

import ExcludeMenuService from '@modules/customer/service/ExcludeMenuService';
import Items from '@modules/customer/infra/typeorm/models/Item';

import {container} from 'tsyringe';

export default class menuController{
    public async show(request:Request, response:Response):Promise<Response> {
    
        try{ 
            const id = request.params.id;
            const exclude = container.resolve(ExcludeMenuService);
    
            const restaurant = await exclude.execute({id
            });

            const items =  await getRepository(Items).find({ where: { id: id }});

            return response.json({ restaurant, items });

        } catch (err) {
            return response.status(400).json({error:err.message});
        }
    } 
}
  
