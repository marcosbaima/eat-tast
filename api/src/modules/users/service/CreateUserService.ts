import {inject,injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/models/Users';
import IUsersRepository from '../Repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface Request {
  name: string;
  email: string;
  password: string;
  groupsId: string;
  ownersId: string;
  branchsId: string;
  powerUser:boolean;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository:IUsersRepository,

    @inject('HashProvider')
    private hashProvider:IHashProvider,

     ){}
  public async execute({
    name,
    email,
    password,
    groupsId,
    ownersId,
    branchsId,
    powerUser,
  }: Request): Promise<User> {

    const checkUserExists = await this.usersRepository.findByEmail(
      email ,
    );
    const hashedPassword = await this.hashProvider.generateHash(password);

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      groupsId,
      ownersId,
      branchsId,
      powerUser
    });

    return user;
  }
}

export default CreateUserService;
