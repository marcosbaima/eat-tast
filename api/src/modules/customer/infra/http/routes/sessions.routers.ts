import { Router } from 'express';
import SessionController from '@modules/customer/infra/http/controller/SessionController'
// Rota: Receberuma requisição, chamar outro arquivo, devolver uma resposta
// SoC:

const sessionsRouter = Router();
const sessionController = new SessionController()

sessionsRouter.post('/',sessionController.update)

export default sessionsRouter;
