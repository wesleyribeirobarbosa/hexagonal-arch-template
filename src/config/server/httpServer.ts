import express from 'express';
import setMiddlewares from './middleware';
import setRoutes from './routes';

const server = express();
setMiddlewares(server);
setRoutes(server);

export default server;
