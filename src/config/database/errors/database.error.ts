export default class DatabaseError extends Error {
  constructor(error: any) {
    super(`Database Error. Details: ${error}`);
    this.name = 'DatabaseError';
  }
}
