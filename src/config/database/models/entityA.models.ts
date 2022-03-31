import mongoose, { Schema } from 'mongoose';

const EntityASchema = new Schema({
  paramA: {
    type: String,
    unique: true,
  },
});

const EntityAModel = mongoose.model('EntityAModel', EntityASchema);

export default EntityAModel;
