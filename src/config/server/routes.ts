import { Express } from 'express';

import { productRoutes } from '../../routes/product.routes';

export default (server: Express) : void => {
 server.use("/", productRoutes);
};
