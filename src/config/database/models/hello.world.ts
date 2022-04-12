import mongoose, { Schema } from 'mongoose';

const HelloWorldSchema = new Schema({
  message: String,
});

const HelloWorldModel = mongoose.model('HelloWorldModel', HelloWorldSchema);

export default HelloWorldModel;
