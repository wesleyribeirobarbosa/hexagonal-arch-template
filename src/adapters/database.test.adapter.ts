import IUserRepository from './contracts/iuser.repository';

import 'dotenv/config';
import User from '../application/user/domain/user/user';

export default class DatabaseTestAdapter implements IUserRepository {
  save(user) {
    if (user.name === 'error.test') throw new Error('Test Error');
    return new User(user.name, user.email, user.age);
  }

  find(_id) {
    return { _id, name: 'teste', email: 'teste@teste.com', age: 1 };
  }
}
