import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaated from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import menuController from '../controller/menuController';

const menuRouter = Router();
menuRouter.use(ensureAuthenticaated);

const MenuController = new menuController()

menuRouter.get('/',celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required(),            
  }),
}),MenuController.show);

export default menuRouter;
