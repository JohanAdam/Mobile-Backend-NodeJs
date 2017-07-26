//RESTAURANT MODEL
import mongoose from 'mongoose';
let Schema = mongoose.Schema;

//Blueprint of the database model
let restaurantSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
