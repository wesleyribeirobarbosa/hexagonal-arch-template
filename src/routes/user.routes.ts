import { Router } from 'express';
import CreateUserController from '../application/user/useCases/createUser/create.user.controller';

const userRoutes = Router();

userRoutes.post('/user', new CreateUserController().handle);

export { userRoutes };
