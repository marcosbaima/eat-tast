import { Router } from 'express';
import SessionController from '@modules/customer/infra/http/controller/SessionController'

const sessionsRouter = Router();
const sessionController = new SessionController()

sessionsRouter.post('/',sessionController.update)

export default sessionsRouter;
