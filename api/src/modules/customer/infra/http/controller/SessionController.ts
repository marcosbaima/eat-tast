import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '@modules/customer/service/AuthenticateUserSession';
//import { classToClass } from 'class-transformer'

export default class SessionController{

 public async update(request:Request, response: Response):Promise<Response>{
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { customer, token } = await authenticateUser.execute({
      email,
      password,
    });


    return response.json({customer, token});
  };
}
