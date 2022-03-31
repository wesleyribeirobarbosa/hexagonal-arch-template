import { container } from 'tsyringe';
import IRepositoryAdapter from '../../ports/driven/contracts/ientityA.repository.adapter';
import MongooseAdapter from '../../adapters/driven/mongoose.adapter';

container.registerSingleton<IRepositoryAdapter>(
  'EntityARepository',
  MongooseAdapter,
);
