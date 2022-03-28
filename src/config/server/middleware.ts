import {
  Express,
  json,
  Request,
  Response,
  NextFunction,
 } from 'express';

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
  server.use(bodyParser);
  server.use(cors);
  server.use(contentType);
};
