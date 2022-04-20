/* eslint-disable @typescript-eslint/no-explicit-any */
export default class ApplicationError {
  type: string;
  details: any;

  constructor(type: string, details: any) {
    this.type = type;
    this.details = details;
  }
}
