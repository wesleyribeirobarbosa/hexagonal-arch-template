import { container } from 'tsyringe';
import IRepositoryAdapter from '../../ports/driven/contracts/iproduct.repository.adapter';
import MongooseAdapter from '../../adapters/driven/mongoose.adapter';

container.registerSingleton<IRepositoryAdapter> (
 'RepositoryAdapter',
  MongooseAdapter
);
