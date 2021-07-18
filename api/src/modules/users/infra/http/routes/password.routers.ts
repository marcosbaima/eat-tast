import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from  '../controllers/ResetPasswordController';
import ensureAuthenticated from '../middlewares/ensureAuthenticate';

const passwordRouter = Router();
const forgotPasswordControler=new ForgotPasswordController();
const resetPasswordControler= new ResetPasswordController();

//passwordRouter.use(ensureAuthenticated)
passwordRouter.post('/forgot',celebrate({
  [Segments.BODY]: Joi.object().keys({

    email:Joi.string().email()

  })

}),forgotPasswordControler.create);

passwordRouter.post('/reset',celebrate({
  [Segments.BODY]: Joi.object().keys({
    token:Joi.string().uuid().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.when('password', {
      is: Joi.exist(),
      then: Joi.valid(Joi.ref('password')).required(),
    }),

  })

}),resetPasswordControler.create);

export default passwordRouter;
