import IUserRepository from './contracts/iuser.repository';

import 'dotenv/config';
import User from '../application/user/domain/user/user';

export default class DatabaseTestAdapter implements IUserRepository {
  save(user) {
    if (user.id === 999) throw new Error('Test Error');
    return new User(user.id, user.name, user.email, user.age);
  }

  find(id) {
    return { id, name: 'teste', email: 'teste@teste.com', age: 1 };
  }
}
