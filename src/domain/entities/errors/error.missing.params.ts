import IErrorMessage from './contracts/ierror.message';

export default class MissingParamError implements IErrorMessage {

 message: string;

 constructor (paramName: string) {
   this.message = `Missing param: ${paramName}`;
 };

 getMessage (): string {
   return this.message;
 };
}
