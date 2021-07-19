import { Router } from 'express';
import ensureAuthenticaated from '@modules/users/infra/http/middlewares/ensureAuthenticate';
import { celebrate, Joi, Segments } from 'celebrate'
import restaurantController from '../controller/restaurantController';

const RestaurantRouter = Router();
RestaurantRouter.use(ensureAuthenticaated);

const RestaurantController = new restaurantController()

RestaurantRouter.get('/',RestaurantController.show);
RestaurantRouter.post('/',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().allow(null),
        restaurant_name:Joi.string().required(),
        restaurant_address:Joi.string().required(),
        restaurant_city:Joi.string().required(),
        culinary:Joi.string().required(),
    }),
  }),RestaurantController.create);


export default RestaurantRouter;
