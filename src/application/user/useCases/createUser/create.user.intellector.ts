import { Request } from 'express';
import User from '../../domain/user/user';

export default class CreateUserIntellector {
  handle(request: Request) {
    const { name, email, age } = request.body;
    return User.create(name, email, age);
  }
}
