import 'reflect-metadata';

import { container } from 'tsyringe';

import { Either } from '../../../../shared/either';
import User from '../../domain/user/user';
import CreateUserUseCase from './create.user.usecase';
import IUserRepository from '../../../../adapters/contracts/iuser.repository';
import DatabaseTestAdapter from '../../../../adapters/database.test.adapter';

describe('Testing user creation', () => {
  let createUserUseCase = null;

  beforeAll(() => {
    container.registerSingleton<IUserRepository>(
      'UserRepository',
      DatabaseTestAdapter,
    );
    createUserUseCase = container.resolve(CreateUserUseCase);
  });

  test('Valid User', async () => {
    const user = new User('teste', 'teste@teste.com', 1);
    const userCreationResponse: Either<string, User> =
      await createUserUseCase.createUser(user);
    expect(userCreationResponse.isRight()).toBe(true);
    expect(userCreationResponse.value).toBeInstanceOf(User);
  });

  test('Database Error', async () => {
    const user = new User('error.test', 'teste@teste.com', 1);
    const userCreationResponse: Either<string, User> =
      await createUserUseCase.createUser(user);
    expect(userCreationResponse.isLeft()).toBe(true);
    expect(userCreationResponse.value).toMatch(/(Database Error.)/i);
  });
});
