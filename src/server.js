import next from 'next';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Message-App');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});


const handle = nextApp.getRequestHandler();

const PORT = 3001;

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());

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
