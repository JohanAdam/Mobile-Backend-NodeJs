import mongoose from 'mongoose';
import config from './config';

//Connect to db and pass back the db
export default callback => {
  let db = mongoose.connect(config.mongoUrl, { useMongoClient:true });
  callback(db);
}
