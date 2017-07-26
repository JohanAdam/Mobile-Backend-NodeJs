import express from 'express';
//Up one directory and go to config folder
import config from '../config';
import middleware from '../middleware';
import initializedDb from '../db';
import restaurant from '../controller/restaurant';

//ROUTES
//This is for configure routes url to the api

let router = express();

//connect to db
initializedDb(db => {

  //internal middleware
  router.use(middleware({ config, db }));

  //api routes v1 (/v1)
  //Domain/v1/restaurant ; call restaurant controller in 'controller'
  router.use('/restaurant', restaurant({ config, db }));

});

export default router;
