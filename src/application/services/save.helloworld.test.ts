import 'reflect-metadata';
import { container } from 'tsyringe';
import { error, success } from '../../shared/either';
import { SaveHelloWorldResponse } from '../../shared/types/response.types';
import HelloWorldRepository from '../ports/resources/helloworld.repository';
import SaveHelloWorldService from './save.helloworld.service';

describe('Testing Save Hello World Service', () => {
  const makeSut = (Adapter) => {
    container.registerSingleton<HelloWorldRepository>(
      'HelloWorldRepository',
      Adapter,
    );
    return container.resolve(SaveHelloWorldService);
  };

  const makeAdapter = (response) =>
    class MongoAdapter implements HelloWorldRepository {
      saveMessage(): Promise<SaveHelloWorldResponse> {
        return response;
      }
    };

  test('Testing valid input parameters', async () => {
    const TestAdapter = makeAdapter(success(''));

    const sut = makeSut(TestAdapter);
    const testResponse = await sut.handle('Teste');

    expect(testResponse.isSuccess()).toBeTruthy();
  });

  test('Testing invalid input parameters', async () => {
    const TestAdapter = makeAdapter(error(''));

    const sut = makeSut(TestAdapter);
    const testResponse = await sut.handle(null);

    expect(testResponse.isError()).toBeTruthy();
  });

  test('Testing repository error', async () => {
    const TestAdapter = makeAdapter(error(''));

    const sut = makeSut(TestAdapter);
    const testResponse = await sut.handle('Teste');

    expect(testResponse.isError()).toBeTruthy();
  });
});
