import { Express } from 'express';

import { entityARoutes } from '../../ports/driver/routes/entityA.routes';

export default (server: Express): void => {
  server.use('/', entityARoutes);
};
