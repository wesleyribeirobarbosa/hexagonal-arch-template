import { connect } from 'mongoose';

import 'dotenv/config';
import { SaveHelloWorldResponse } from '../../shared/types/mongo.responses';
import { left, right } from '../../shared/either';
import DatabaseError from '../../shared/error/database.error';
import ErrorTypes from '../../shared/error/error.types';
import HelloWorldRepository from '../../application/ports/resources/helloworld.repository';
import HelloWorldModel from '../../config/database/models/hello.world';

export default class MongoAdapter implements HelloWorldRepository {
  async connect(): Promise<void> {
    try {
      await connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`,
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('ERROR_MONGO_CONNECTION', e);
    }
  }

  async saveMessage(message: string): Promise<SaveHelloWorldResponse> {
    try {
      const helloWorldModel = new HelloWorldModel({ message });
      const response = await helloWorldModel.save();
      return right(response.message);
    } catch (e) {
      return left(new DatabaseError(ErrorTypes.DATABASE_ERROR, e));
    }
  }
}
