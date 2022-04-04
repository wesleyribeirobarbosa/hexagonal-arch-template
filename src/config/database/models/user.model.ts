import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  age: Number,
});

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;
