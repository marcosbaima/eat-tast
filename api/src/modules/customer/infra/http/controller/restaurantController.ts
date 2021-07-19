import { Request, Response} from 'express';
import { getRepository } from 'typeorm';

import Restaurant from '@modules/customer/infra/typeorm/models/Restaurant';


export default class menuController{
    public async show(request:Request, response:Response):Promise<Response> {
    
        
        const Restaurants =  await getRepository(Restaurant);

        return response.json({ Restaurants });

     
    } 
}


