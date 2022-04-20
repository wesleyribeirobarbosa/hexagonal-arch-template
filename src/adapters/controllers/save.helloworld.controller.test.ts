import 'reflect-metadata';
import { container } from 'tsyringe';
import HelloWorldRepository from '../../application/ports/resources/helloworld.repository';
import SaveHelloWorldService from '../../application/services/save.helloworld.service';
import { error, success } from '../../shared/either';
import ApplicationError from '../../shared/error/application.error';
import ErrorTypes from '../../shared/error/error.types';

import { HTTPRequest } from '../../shared/types/http.types';
import { SaveHelloWorldResponse } from '../../shared/types/response.types';
import SaveHelloWorldController from './save.helloworld.controller';

describe('', () => {
  const request: HTTPRequest = {
    query: null,
    params: null,
    body: {
      message: 'Hello World!',
    },
  };

  const makeAdapter = {
    success: class Adapter implements HelloWorldRepository {
      async saveMessage(): Promise<SaveHelloWorldResponse> {
        return success('');
      }
    },
    error: class Adapter implements HelloWorldRepository {
      async saveMessage(): Promise<SaveHelloWorldResponse> {
        return error(new ApplicationError(ErrorTypes.DATABASE_ERROR, ''));
      }
    },
  };

  test('Testing Success Response', async () => {
    container.registerSingleton<HelloWorldRepository>(
      'HelloWorldRepository',
      makeAdapter.success,
    );
    const saveHelloWorldService = container.resolve(SaveHelloWorldService);
    const saveHelloWorldController = new SaveHelloWorldController(
      saveHelloWorldService,
    );

    const response = await saveHelloWorldController.handle(request);

    expect(response.statusCode).toBe(200);
  });

  test('Testing Error Response', async () => {
    container.registerSingleton<HelloWorldRepository>(
      'HelloWorldRepository',
      makeAdapter.error,
    );
    const saveHelloWorldService = container.resolve(SaveHelloWorldService);
    const saveHelloWorldController = new SaveHelloWorldController(
      saveHelloWorldService,
    );

    const response = await saveHelloWorldController.handle(request);

    expect(response.statusCode).not.toBe(200);
    expect(response.body).toHaveProperty('error');
  });
});
