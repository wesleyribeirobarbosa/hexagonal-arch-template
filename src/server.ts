import dotenv from 'dotenv';

import httpServer from './config/server/httpServer';
import MongooseAdapter from './adapters/mongoose.adapter';

dotenv.config();

new MongooseAdapter()
  .connect()
  .then(async () => {
    httpServer.listen(process.env.PORT || 3001, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(console.error);
