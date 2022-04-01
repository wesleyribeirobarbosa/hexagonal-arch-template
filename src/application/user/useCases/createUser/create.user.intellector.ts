import User from '../../domain/user/user';

export default class CreateUserIntellector {
  handle(request) {
    const { name, email, age } = request.body;
    return User.create(name, email, age);
  }
}
