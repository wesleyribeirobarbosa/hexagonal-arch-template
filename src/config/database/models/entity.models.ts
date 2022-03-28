import mongoose,{ Schema } from 'mongoose';

const EntitySchema = new Schema({
 param: {
   type: String,
   index: true,
   unique: true,
 },
});

const EntityModel = mongoose.model('EntityModel', EntitySchema);

export default EntityModel;
