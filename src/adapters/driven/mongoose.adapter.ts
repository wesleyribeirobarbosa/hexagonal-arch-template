import EntityModel from '../../config/database/models/entityA.models';
import { connect } from 'mongoose';
import IRepositoryAdapter from '../../ports/driven/contracts/ientityA.repository.adapter';
import { Either, left } from '../../shared/either';
import EntityA from '../../application/entities/entityA';

import dotenv from 'dotenv';
dotenv.config();

export default class MongooseAdapter implements IRepositoryAdapter {
  async dbconnect(): Promise<void> {
    try {
      await connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`,
      );
    } catch (error) {
      console.log('ERROR_MONGO_CONNECTION', error);
    }
  }

  async save(entityA: EntityA): Promise<Either<Error, EntityA>> {
    try {
      const response = await new EntityModel(entityA).save();
      return response;
    } catch (error) {
      return left(new Error(`Error saving paramA: ${error}`));
    }
  }
}
