import { Express } from 'express';

import { sampleRoutes } from '../routes/sample.routes';

export default (server: Express) : void => {
 server.use("/", sampleRoutes);
};
