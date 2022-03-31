import DomainError from './error.domain';

export class InvalidParamAError extends Error implements DomainError {
 constructor (paramA: string) {
   super(`The param "${paramA}" is invalid.`);
   this.name = 'InvalidParamAError';
 };
};
