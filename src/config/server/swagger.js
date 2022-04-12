/* eslint-disable @typescript-eslint/no-var-requires */
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/config/server/swagger.json';
const endpointsFiles = ['./src/routes/shopper.routes.ts'];

swaggerAutogen(outputFile, endpointsFiles);
