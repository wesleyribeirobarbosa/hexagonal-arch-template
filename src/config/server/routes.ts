import { Express } from 'express';

import { productRoutes } from '../../ports/driver/routes/product.routes';

export default (server: Express) : void => {
 server.use("/", productRoutes);
};
