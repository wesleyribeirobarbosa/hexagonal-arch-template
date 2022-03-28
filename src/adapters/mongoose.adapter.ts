import EntityModel from '../config/database/models/entity.models';
import Entity from '../entities/entity';
import { connect } from 'mongoose';
import IRepositoryAdapter from './contracts/irepository.adapter';

require('dotenv').config();

export default class MongooseAdapter implements IRepositoryAdapter {

  async dbconnect(): Promise<void> {
   try {
      await connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`);
    } catch (error) {
      console.log('ERROR_MONGO_CONNECTION', error);
    };
  };

  async save(entity: Entity): Promise<Entity> {
   const response = await new EntityModel(entity).save();
   return response;
  };
};
