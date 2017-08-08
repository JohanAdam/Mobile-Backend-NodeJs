'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _restaurant = require('../model/restaurant');

var _restaurant2 = _interopRequireDefault(_restaurant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//RESTAURANT controller

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  //CRUD - Create Read Update Delete

  //POST Request 'Domain/v1/restaurant/add' - Create
  api.post('/add', function (req, res) {
    //create new Restaurant
    var newRest = new _restaurant2.default();
    //get the name in the request and set to the Model.name
    newRest.name = req.body.name;

    //Save the data ; mongoose make simple to save data to mongoDb
    newRest.save(function (err) {
      if (err) {
        //if there is an error while save, send err to the response
        res.send(err);
      }
      //If there is no error while save, send message that data has been save without problem.
      res.json({ message: 'Restaurant saved successfully!' });
    });
  });

  //GET Request 'Domain/v1/restaurant' - Read
  api.get('/', function (req, res) {
    //Go to Restaurant db and find all
    _restaurant2.default.find({}, function (err, restaurants) {
      if (err) {
        //If error exist while get all Restaurant
        res.send(err);
      }
      //If the no error ; success
      res.json(restaurants);
    });
  });

  //GET Request 'Domain/v1/restaurant/:id' - Read 1
  api.get('/:id', function (req, res) {
    //Go to Restaurant db and find by id
    _restaurant2.default.findById(req.params.id, function (err, restaurant) {
      if (err) {
        //If error exist while get item in db
        res.send(err);
      }
      //If no error while get item in db
      res.json(restaurant);
    });
  });

  //PUT Request 'Domain/v1/restaurant/:id' - Update
  api.put('/:id', function (req, res) {
    //Go to restaurant and find by id
    _restaurant2.default.findById(req.params.id, function (err, restaurant) {
      if (err) {
        //send back error if persist
        res.send(err);
      }
      //the name in the request assigned to the exist name
      restaurant.name = req.body.name;
      restaurant.save(function (err) {
        if (err) {
          //If error while save the data
          res.send(err);
        }
        res.json({ message: "Restaurant info updated successfully!" });
      });
    });
  });

  //DELETE Request 'Domain/v1/restaurant/:id' - Delete
  api.delete('/:id', function (req, res) {
    //Get Restaurant model and remove by id from the request
    _restaurant2.default.remove({
      _id: req.params.id
    }, function (err, restaurant) {
      //If error while delete
      if (err) {
        //Send the error
        res.send(err);
      }
      //If there is no error while delete, Send message
      res.json({ message: "Restaurant successfully removed!" });
    });
  });

  //return the api back after finish
  return api;
};
//# sourceMappingURL=restaurant.js.map