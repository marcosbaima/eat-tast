import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaated from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import singnupController from '../controller/signupController';

const singnupRouter = Router();
//singnupRouter.use(ensureAuthenticaated);

const SingnupController = new singnupController()


singnupRouter.post('/',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),            
    email: Joi.string().required(),
    password:Joi.string().allow(null),
    address:Joi.string().allow(null),
    district:Joi.string().allow(null),
  }),
}),SingnupController.create);


export default singnupRouter;
