import 'reflect-metadata';
import './shared/container/container';

import httpServer from './config/server/httpServer';
import MongooseAdapter from './adapters/driven/mongoose.adapter';

import dotenv from 'dotenv';
dotenv.config();

new MongooseAdapter()
  .dbconnect()
  .then(async () => {
    httpServer.listen(process.env.PORT || 3001, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(console.error);
