import { container } from 'tsyringe';
import HelloWorldRepository from '../application/ports/resources/helloworld.repository';
import MongoAdapter from '../adapters/infrastructure/mongo.adapter';
import SaveHelloWorldService from '../application/services/save.helloworld.service';
import SaveHelloWorldUseCase from '../application/ports/usecases/save.helloworld.usecase';

container.registerSingleton<HelloWorldRepository>(
  'HelloWorldRepository',
  MongoAdapter,
);

container.registerSingleton<SaveHelloWorldUseCase>(
  'SaveHelloWorldUseCase',
  SaveHelloWorldService,
);
