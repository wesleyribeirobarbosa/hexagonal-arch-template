import { Express } from 'express';

import helloWorldRoutes from '../../routes/hello.world.routes';

export default (server: Express): void => {
  server.use('/api', helloWorldRoutes);
};
