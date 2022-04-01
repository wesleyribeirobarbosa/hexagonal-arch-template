import { container } from 'tsyringe';
import IUserRepository from '../../adapters/contracts/iuser.repository';
import MongooseAdapter from '../../adapters/mongoose.adapter';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  MongooseAdapter,
);
