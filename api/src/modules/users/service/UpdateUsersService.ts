
import AppError from '@shared/errors/AppError';
import Users from '@modules/users/infra/typeorm/models/UsersUpdate';
import IUpdateUsersRepository from '../Repositories/IUpdateUsersRepository';
import { injectable, inject} from 'tsyringe';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
interface Request {
  user_id:string;
  name: string;
  //branchsId:string;
  //ownersId:string;
  email: string;
  groupsId:string;
  powerUser:boolean;
}

@injectable()
class UpdateProfile {
  constructor(
    @inject('UsersUpdateRepository')
    private usersUpdateRepository:IUpdateUsersRepository,

    @inject('HashProvider')
    private hashProvider:IHashProvider,

    ){}
  public async execute({ user_id, name, email,groupsId,powerUser }: Request): Promise<Users> {
    const user = await this.usersUpdateRepository.findById(user_id);
    //console.log(user)
    if (!user) {
      throw new AppError('User not found');
    }

   /* const userWithUpdateEmail=  await this.usersUpdateRepository.findByEmail(email)

    if (userWithUpdateEmail && userWithUpdateEmail.id != user_id){
      throw new AppError('E-mail already in use')
    }*/

    user.name= name;
    user.email= email;
    user.groupsId=groupsId;
    //user.ownersId = ownersId;
    //user.branchsId = branchsId;
    user.powerUser= powerUser;


    return this.usersUpdateRepository.save(user);


  }
}

export default UpdateProfile ;
