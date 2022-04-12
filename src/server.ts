import 'reflect-metadata';
import './shared/container';

import httpServer from './config/server/httpServer';
import MongoAdapter from './adapters/infrastructure/mongo.adapter';

import 'dotenv/config';

new MongoAdapter()
  .connect()
  .then(async () => {
    httpServer.listen(process.env.PORT || 3001, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
