import  nodemailer, { Transporter } from 'nodemailer';
import aws from 'aws-sdk';
import mailConfig from '@config/mail'
import { injectable, inject } from 'tsyringe'
import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

import IMailTemplateProvider from '@shared/container/providers/MailTampleteProvider/models/IMailTemplateProvider';

@injectable()
export default class SesMailProvider implements IMailProvider{
  private client: Transporter;

  constructor(
    @inject('MailTemplateProvider')
    private mailTemplateProvider:IMailTemplateProvider
  ){
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
          apiVersion: '2010-12-01',
          region:'sa-east-1',
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
          },
      })
    });
  }

   public async sendMail({to,from,subject,templateData}:ISendMailDTO):Promise<void>{
      const {email,name} = mailConfig.defauts.from;

      await this.client.sendMail({
      from:{
        name:from?.name || name,
        address:from?.email || email,
      },

      to:{
        name:to.name,
        address:to.email
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
  }
}

