import { sign } from 'jsonwebtoken';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import AppError from '@shared/errors/AppError';
import ICustomersRepository from '@modules/customer/Repositories/ICustomerRepository';

import Customer from '@modules/customer/infra/typeorm/models/Customer';
import authConfig from '@config/auth';
import { injectable, inject} from 'tsyringe';

interface Request {
  email: string;
  password: string;
}

interface Response {
  customer: Customer;

  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('CustomerRepository')
    private customerRepository:ICustomersRepository,

    @inject('HashProvider')
    private hashProvider:IHashProvider,

    ){}

  public async execute({ email, password }: Request): Promise<Response> {

    const customer = await this.customerRepository.findByEmail(email);

    if (!customer) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(password, customer.password_hash);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: customer.id,
      expiresIn,
    });
    return {
      customer,
      token,
    };
  }
}

export default AuthenticateUserService;
