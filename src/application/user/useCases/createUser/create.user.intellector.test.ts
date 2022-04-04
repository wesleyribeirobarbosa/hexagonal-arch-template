import 'reflect-metadata';

import CreateUserIntellector from './create.user.intellector';
import User from '../../domain/user/user';

describe('Testing user creation intellector', () => {
  test('Valid Input Data', async () => {
    const request = {
      body: {
        name: 'teste',
        email: 'teste@teste.com',
        age: 1,
      },
    };
    const intellectorResponse = new CreateUserIntellector().handle(request);
    expect(intellectorResponse.isRight()).toBe(true);
    expect(intellectorResponse.value).toBeInstanceOf(User);
  });

  test('Invalid Input Data (Missing parameters)', async () => {
    const request = {
      body: {},
    };
    const intellectorResponse = new CreateUserIntellector().handle(request);
    expect(intellectorResponse.isLeft()).toBe(true);
  });
});
