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

      console.log(email)

      const customer= container.resolve(Customer)

      const createCustumer = await customer.execute({
        email,
        name,
        password_hash:password,
        address,
        district
      })

      return response.json(createCustumer)

    }catch(err){
      return response.status(400).json({error:err.message});
    }

  }

}
  
