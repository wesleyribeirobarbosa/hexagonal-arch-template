import { connect } from 'mongoose';

import IUserRepository from './contracts/iuser.repository';
import UserModel from '../config/database/models/user.model';

import 'dotenv/config';

export default class MongooseAdapter implements IUserRepository {
  async connect(): Promise<void> {
    try {
      await connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`,
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR_MONGO_CONNECTION', error);
    }
  }

  save(user) {
    return UserModel.create(user);
  }
}
