import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import AppError from '../../errors/AppError';

import 'database';
import '@shared/container';


const app = express()

app.use(cors());

const http = require('http').createServer(app)
const io = require('socket.io')(http)


app.use(express.json());


app.use(routes);

var messagesUsers:any = {};
var messagesAdm:any= {}

io.on('connection',function(socket:any){

  //const session = socket.request.session;
  const {branchId} = socket.handshake.query;
  const {ownerId} = socket.handshake.query;

  messagesUsers[branchId] = socket.id
  messagesAdm[ownerId]= socket.id

  socket.on('sendMessage',(data:any)=>{

      if(data.branchId){
        const branchSocket = messagesUsers[data.branchId];
        socket.to(branchSocket).emit('receivedMessage',data);
      }else{
        const ownerSocket = messagesAdm[data.ownerId]
        if (data.newMessage){
          socket.to(ownerSocket).emit('newMessage',data);
        }
        socket.to(ownerSocket).emit('receivedMessage',data);
      }
  })

  socket.on('disconnect',()=>{
    delete messagesUsers[branchId];
  });

});

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: 'err.message',
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });

});

app.use('/',(req,res,next)=>{
  //res.render("index.html");
  //@ts-ignore
  res.messagesUsers = messagesUsers;

  next();

})


http.listen(3333, () => {
  console.log('o(*￣▽￣*)ブ Server started on port 3333');
});