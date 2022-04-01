import User from '../../application/user/domain/user/user';

export default interface IUserRepository {
  save(user: User);
  find(id: number);
}
