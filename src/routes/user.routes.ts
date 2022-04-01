import { Router } from 'express';
import CreateUserController from '../controllers/userControllers/create.user.controller';

const userRoutes = Router();

userRoutes.post('/user', new CreateUserController().handle);

export default userRoutes;
