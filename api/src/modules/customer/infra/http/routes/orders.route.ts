import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaated from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import orderController from '../controller/orderController';

const OrderRouter = Router();
OrderRouter.use(ensureAuthenticaated);

const OrderController = new orderController()


OrderRouter.post('/',celebrate({
  [Segments.BODY]: Joi.object().keys({
    items: Joi.string().required(),            
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required(),            
  }),
  [Segments.QUERY]: Joi.object().keys({
    userId: Joi.string().required(),            
  }),
}),OrderController.create);

//CustomerRouter.get('/',ApiController.show);

//CustomerRouter.put('/',ApiController.update);


export default OrderRouter;
