import IUserRepository from './contracts/iuser.repository';
import 'dotenv/config';
import UserModel from '../config/database/models/user.model';
import { connect } from 'mongoose';

export default class MongooseAdapter implements IUserRepository {

  async connect(): Promise<void> {
   try {
     await connect(
       `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`,
     );
   } catch (error) {
     console.log('ERROR_MONGO_CONNECTION', error);
   }
  };

  save(user) {
    return UserModel.create(user);
  };

  find(id) {
    return UserModel.findById({ id });
  };
};
