import { Express } from 'express';

import userRoutes from '../../routes/user.routes';

export default (server: Express): void => {
  server.use('/', userRoutes);
};
