import { Express, json, Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const bodyParser = json();

const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-headers', '*');
  res.set('access-control-allow-methods', '*');
  next();
};

const contentType = (req: Request, res: Response, next: NextFunction): void => {
  res.type('json');
  next();
};

export default (server: Express): void => {
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  server.use(bodyParser);
  server.use(cors);
  server.use(contentType);
};
