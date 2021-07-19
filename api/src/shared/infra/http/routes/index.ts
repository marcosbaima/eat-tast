import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../../../config/multer';

import usersRouter from '@modules/users/infra/http/routes/users.route';

import profileRouter from '@modules/users/infra/http/routes/profile.routers';
import groupRouter from '@modules/groups/infra/http/routes/group.router';

import signupController  from '@modules/customer/infra/http/routes/singnup.route';
import sessionController from '@modules/customer/infra/http/routes/sessions.routers';
import restaurantsController  from '@modules/customer/infra/http/routes/restaurant.route';

import menuController from '@modules/customer/infra/http/routes/menu.route';
import orderController from '@modules/customer/infra/http/routes/orders.route';
import customerController from '@modules/customer/infra/http/routes/customer.route';
import customerRestaurantController from '@modules/customer/infra/http/routes/ordersInformations.route';

//import restaurantController from '@modules/customer/infra/http/routes/restaurant.route';
//import itemController from '../../../../app/controllers/manager/itemController';
//import dashboardController from '../../../../app/controllers/manager/dashboardController';


//import authMiddleware from '../../../../app/middlewares/auth';

const routes = Router();


const upload = multer(multerConfig)


routes.use('/users', usersRouter);
//routes.use('/avatar', usersRouter);

/*         ('/update/{UserID}') */
routes.use('/user/update', usersRouter);

routes.use('/adm/group', groupRouter);

routes.use('/adm/group/list', groupRouter);

routes.use('/adm/list/user', usersRouter);

routes.use('/profile/update', profileRouter);

routes.use('/profile/list', profileRouter);

/*
*********Public routes**************
*/

// Manager
routes.use('/signup', signupController);
routes.use('/session', sessionController);

routes.use('/restaurants', restaurantsController);
routes.use('/restaurants/:id/menu', menuController);

//routes.use(authMiddleware);

routes.use('/restaurants/:id/order', orderController);
routes.use('/informations', customerRestaurantController)
routes.use('/customer/create', customerController)


/*
********* Public session routes *************
*/

// Manager
//routes.post('/signup', signupController.store);
//routes.post('/sessions', sessionController.store);


export default routes;