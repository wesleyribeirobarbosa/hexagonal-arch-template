import IErrorMessage from '../../../adapters/contracts/ierror.message';

export default class DatabaseError implements IErrorMessage {

 message: string;

 constructor (error: string) {
   this.message = `Database Error: ${error}`;
 };

 getMessage (): string {
   return this.message;
 };
};
