import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaated from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import customerController from '../controller/custumerController';

const CustomerRouter = Router();
CustomerRouter.use(ensureAuthenticaated);

const CustomerController = new customerController()


CustomerRouter.post('/',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),            
    email: Joi.string().required(),
    password:Joi.string().allow(null),
    address:Joi.string().allow(null),
    district:Joi.string().allow(null),
  }),
}),CustomerController.create);

//CustomerRouter.get('/',ApiController.show);

//CustomerRouter.put('/',ApiController.update);


export default CustomerRouter;
