import 'reflect-metadata';
import './shared/container';

import httpServer from './config/server/httpServer';
import MongooseAdapter from './adapters/mongoose.adapter';

require('dotenv').config();

new MongooseAdapter().dbconnect()
  .then(async () => {
     httpServer.listen(process.env.PORT || 3001, () => {
       console.log(`Server running on port ${process.env.PORT}`);
     });
  }).catch(console.error);
