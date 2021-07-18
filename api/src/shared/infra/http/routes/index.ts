import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../../../config/multer';

//import usersRouter from '@modules/users/infra/http/routes/users.route';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routers';
import profileRouter from '@modules/users/infra/http/routes/profile.routers';
import groupRouter from '@modules/groups/infra/http/routes/group.router';

//import signupController  from '../../../../app/controllers/customer/signupController';
//import sessionController from '../../../../app/controllers/customer/sessionController';
//import restaurantsController  from '../../../../app/controllers/customer/restaurantsController';
//import menuController from '../../../../app/controllers/customer/menuController';
//import orderController from '../../../../app/controllers/customer/orderController';
import customerController from '@modules/customer/infra/http/routes/customer.route';

//import restaurantController from '../../../../app/controllers/manager/restaurantController';
//import itemController from '../../../../app/controllers/manager/itemController';
//import dashboardController from '../../../../app/controllers/manager/dashboardController';


//import authMiddleware from '../../../../app/middlewares/auth';

const routes = Router();


const upload = multer(multerConfig)


//routes.use('/users', usersRouter);
//routes.use('/avatar', usersRouter);
routes.use('/login', sessionsRouter);
/*         ('/update/{UserID}') */
//routes.use('/user/update', usersRouter);

routes.use('/adm/group', groupRouter);

routes.use('/adm/group/list', groupRouter);

//routes.use('/adm/list/user', usersRouter);

routes.use('/profile/update', profileRouter);

routes.use('/profile/list', profileRouter);

/*
*********Public routes**************
*/

// Manager
//routes.post('/signup', signupController.store);
//routes.post('/session', sessionController.store);

//routes.get('/restaurants', restaurantsController.index);
//routes.get('/restaurants/:id/menu', menuController.index);

//routes.use(authMiddleware);

//routes.post('/restaurants/:id/order', orderController.store);
//routes.use('/informations', customerController.index)
routes.use('/customer/create', customerController)


/*
********* Public session routes *************
*/

// Manager
//routes.post('/signup', signupController.store);
//routes.post('/sessions', sessionController.store);


export default routes;