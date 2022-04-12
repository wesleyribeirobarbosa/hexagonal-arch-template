export default class DatabaseError extends Error {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(error: any) {
    super(`Database Error. Details: ${error}`);
    this.name = 'DatabaseError';
  }
}
