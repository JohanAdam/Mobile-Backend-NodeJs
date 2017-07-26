import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

//RESTAURANT controller

export default({ config, db }) => {
  let api = Router();

  //CRUD - Create Read Update Delete

  //POST Request 'Domain/v1/restaurant/add' - Create
  api.post('/add', (req, res) => {
    //create new Restaurant
    let newRest = new Restaurant();
    //get the name in the request and set to the Model.name
    newRest.name = req.body.name;

    //Save the data ; mongoose make simple to save data to mongoDb
    newRest.save(err => {
      if (err) {
        //if there is an error while save, send err to the response
        res.send(err);
      }
      //If there is no error while save, send message that data has been save without problem.
      res.json({ message: 'Restaurant saved successfully!' });
    });
  });

  //GET Request 'Domain/v1/restaurant' - Read
  api.get('/', (req, res) => {
    //Go to Restaurant db and find all
    Restaurant.find({}, (err, restaurants) => {
      if (err) {
        //If error exist while get all Restaurant
        res.send(err);
      }
      //If the no error ; success
      res.json(restaurants);
    });
  });

  //GET Request 'Domain/v1/restaurant/:id' - Read 1
  api.get('/:id', (req, res) => {
    //Go to Restaurant db and find by id
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        //If error exist while get item in db
        res.send(err);
      }
      //If no error while get item in db
      res.json(restaurant);
    });
  });

  //PUT Request 'Domain/v1/restaurant/:id' - Update
  api.put('/:id', (req, res) => {
    //Go to restaurant and find by id
    Restaurant.findById(req.params.id, (err,restaurant) => {
      if (err) {
        //send back error if persist
        res.send(err);
      }
      //the name in the request assigned to the exist name
      restaurant.name = req.body.name;
      restaurant.save(err => {
        if (err) {
          //If error while save the data
          res.send(err);
        }
        res.json({ message: "Restaurant info updated successfully!" })
      });
    });
  });

  //DELETE Request 'Domain/v1/restaurant/:id' - Delete
  api.delete('/:id', (req, res) => {
    //Get Restaurant model and remove by id from the request
    Restaurant.remove({
      _id: req.params.id
    }, (err, restaurant) => {
      //If error while delete
      if (err) {
        //Send the error
        res.send(err);
      }
      //If there is no error while delete, Send message
      res.json({ message:"Restaurant successfully removed!" });
    });
  });

  //return the api back after finish
  return api;
}
