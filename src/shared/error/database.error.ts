import IError from './error';

export default class DatabaseError implements IError {
  type: string;
  details: string;

  constructor(type: string, details: string) {
    this.type = type;
    this.details = `Database Error. Details: ${details}`;
  }
}
