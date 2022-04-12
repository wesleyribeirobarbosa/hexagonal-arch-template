import { container } from 'tsyringe';
import HelloWorldRepository from '../application/ports/resources/helloworld.repository';
import MongoAdapter from '../adapters/infrastructure/mongo.adapter';

container.registerSingleton<HelloWorldRepository>(
  'HelloWorldRepository',
  MongoAdapter,
);
