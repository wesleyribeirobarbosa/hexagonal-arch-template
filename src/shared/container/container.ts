import { container } from 'tsyringe';
import IRepositoryAdapter from '../../adapters/contracts/irepository.adapter';
import MongooseAdapter from '../../adapters/mongoose.adapter';

container.registerSingleton<IRepositoryAdapter> (
 'RepositoryAdapter',
  MongooseAdapter
);
