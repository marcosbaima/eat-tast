import { Request,Response} from 'express'
import { container } from 'tsyringe';
import Customer from '@modules/customer/service/CreateCustomerService';

export default class singnupController{
  public async create(request:Request, response:Response):Promise<Response> {
    try{

      const { 
        email,
        name,
        password,
        address,
        district 
      } = request.body

      const customer= container.resolve(Customer)

      const createCustumer = customer.execute({
        email,
        name,
        password,
        address,
        district
      })

      return response.status(200).json(createCustumer)

    }catch(err){
      return response.status(400).json({error:err.message});
    }

  }

}
  
