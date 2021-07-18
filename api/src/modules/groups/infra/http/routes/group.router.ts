

import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticate';
import groupsController from '../controllers/groupController';

const groupRouter = Router();
//groupRouter.use(ensureAuthenticated);

const groupController= new groupsController()


// Create
groupRouter.post('/',ensureAuthenticated,groupController.create);

// List
groupRouter.get('/',groupController.show);

// update
groupRouter.put('/',ensureAuthenticated,groupController.update);


export default groupRouter;

