import EntityModel from '../../config/database/models/product.models';
import Product from '../../application/entities/entityA';
import { connect } from 'mongoose';
import IRepositoryAdapter from '../../ports/driven/contracts/ientityA.repository.adapter';
import { Either, error } from '../../shared/either';
import { InvalidParamAError } from '../../application/entities/error/invalid-paramA';
import EntityA from '../../application/entities/entityA';

require('dotenv').config();

export default class MongooseAdapter implements IRepositoryAdapter {

  async dbconnect(): Promise<void> {
   try {
      await connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`);
    } catch (error) {
      console.log('ERROR_MONGO_CONNECTION', error);
    };
  };

  async save(entityA: EntityA): Promise<Either<InvalidParamAError, Product>> {
   const response = await new EntityModel(entityA).save();
   if (response.error) return error(response);
   return response;
  };
};
