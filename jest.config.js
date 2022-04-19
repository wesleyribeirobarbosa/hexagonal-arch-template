/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
   './src/adapters/controllers/**/*.ts',
   './src/application/domain/**/*.ts',
   './src/application/services/**/*.ts',
   './src/shared/error/**/*.ts',
   './src/shared/either.ts',
  ]
};