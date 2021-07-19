import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaated from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import customerRestaurantController from '../controller/customerResturantController';

const CustomerRestauratRouter = Router();
CustomerRestauratRouter.use(ensureAuthenticaated);

const CustomerRestaurantController = new customerRestaurantController()


CustomerRestauratRouter.post('/',celebrate({
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.string().required(),            
  }),
}),CustomerRestaurantController.show);

//CustomerRouter.get('/',ApiController.show);

//CustomerRouter.put('/',ApiController.update);


export default CustomerRestauratRouter;
