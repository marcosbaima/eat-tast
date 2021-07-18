import {inject,injectable} from 'tsyringe';
import  { addHours, isAfter } from 'date-fns';

import IUsersRepository from '../Repositories/IUsersRepository';
import IUserTokensRepository from '../Repositories/IUserTokensRepository'
import IHashProvider from '../providers/HashProvider/models/IHashProvider'
import AppError from '@shared/errors/AppError';

interface Request {
  token: string;
  password: string;
}
@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository:IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository:IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider:IHashProvider,
     ){}
  public async execute({token, password}:Request): Promise<void> {
    const userToken=await this.userTokensRepository.findByToken(token);

    if(!userToken){
      throw new AppError('UserToken does not exists');
    }
    const user=await this.usersRepository.findById(userToken.user_id);

    if(!user){
      throw new AppError('User does not exits');
    }

    const tokenCreatedAt= userToken.created_at;
    const compareDate=addHours(tokenCreatedAt,2);

    if(isAfter(Date.now(),compareDate)){
      throw new AppError('Token expired');
    }

    user.password=await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);


  }
}

export default ResetPasswordService;
