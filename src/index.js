import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//use index.js in config folder
import config from './config';
//use index.js in routes folder
import routes from './routes';

//This is main of the app index.

//create our app
let app = express();
app.server = http.createServer(app);

//middleware
//parse application/json
app.use(bodyParser.json({
  //limit the input data ; so user cant insert more than ex:2tb data
  limit: config.bodyLimit
}));

//passport config

//api routes v1
//Domain/v1/
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
