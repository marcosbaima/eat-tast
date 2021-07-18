import {inject,injectable} from 'tsyringe';
import path from 'path';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../Repositories/IUsersRepository';
import IUserTokensRepository from '../Repositories/IUserTokensRepository'
import AppError from '@shared/errors/AppError';

interface Request {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository:IUsersRepository,

    @inject('MailProvider')
    private mailProvider:IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository:IUserTokensRepository,
     ){}
  public async execute({email}:Request): Promise<void> {
    const checkUserExists=await this.usersRepository.findByEmail(email);

    if (!checkUserExists){
      throw new AppError('user does not exists')
    }

    const { token } =await this.userTokensRepository.generate(checkUserExists.id);

    const forgotPasswordTemplate = path.resolve(__dirname,'..','views','forgot_password.hbs');

    await this.mailProvider.sendMail({
      to:{
        name:checkUserExists.name,
        email:checkUserExists.email,
      },
      subject:'[100Pay] Recuperação de Senha',
      templateData:{
        file: forgotPasswordTemplate,
        variables:{
          name:checkUserExists.name,
          link: `${process.env.APP_WEB_URL}/auth/reset_password?token=${token}`,
        },
      }
    });
  }
}

export default SendForgotPasswordEmailService;
