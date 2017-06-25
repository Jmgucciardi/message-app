import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import AuthenticationRoutes from './routers/authenticationRoutes';
import userLoginRoutes from './routers/userLoginRoutes';
import bodyParser from 'body-parser';
import MessagesRoutes from './routers/messagesRoutes';
import UserRoutes from './routers/usersRoutes';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Message-App');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('connection confimed');
});


const handle = nextApp.getRequestHandler();

const PORT = 3001;

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json())
  .use(AuthenticationRoutes)
  .use(userLoginRoutes)
  .use(MessagesRoutes)
  .use(UserRoutes);



  app.get('*', (request, response) => {
    return handle(request, response);
  });

  // eslint-disable-next-line
  app.use('*', (error, request, response, next) => {
    return response.status(500).json({
      message: error.message
    });
  });

  app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
  });
});
