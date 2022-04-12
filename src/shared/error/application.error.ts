/* eslint-disable @typescript-eslint/no-explicit-any */
import IError from './error';

export default class ApplicationError implements IError {
  type: string;
  details: any;

  constructor(type: string, details: any) {
    this.type = type;
    this.details = details;
  }
}
