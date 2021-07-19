import { Router } from 'express';
import ensureAuthenticaated from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import restaurantController from '../controller/restaurantController';

const RestaurantRouter = Router();
RestaurantRouter.use(ensureAuthenticaated);

const RestaurantController = new restaurantController()

RestaurantRouter.get('/',RestaurantController.show);

export default RestaurantRouter;
