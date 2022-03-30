import EntityModel from '../../config/database/models/product.models';
import Product from '../../application/entities/product';
import { connect } from 'mongoose';
import IRepositoryAdapter from '../../ports/driven/contracts/iproduct.repository.adapter';
import { Either, error } from '../../shared/either';

require('dotenv').config();

export default class MongooseAdapter implements IRepositoryAdapter {

  async dbconnect(): Promise<void> {
   try {
      await connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`);
    } catch (error) {
      console.log('ERROR_MONGO_CONNECTION', error);
    };
  };

  async save(product: Product): Promise<Either<string, Product>> {
   const response = await new EntityModel(product).save();
   if (response.error) return error(response);
   return response;
  };

  async get(name: string): Promise<Either<string, Product>> {
   const response = await new EntityModel().get();
   if (response.error) return error(response);
   return response;
  };
};
