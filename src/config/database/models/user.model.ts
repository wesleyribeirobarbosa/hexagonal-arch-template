import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  email: String,
  age: Number,
});

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;
