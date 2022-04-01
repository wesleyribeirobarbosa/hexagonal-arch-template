const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/config/server/swagger.json';
const endpointsFiles = ['./src/routes/user.routes.ts'];

swaggerAutogen(outputFile, endpointsFiles);
