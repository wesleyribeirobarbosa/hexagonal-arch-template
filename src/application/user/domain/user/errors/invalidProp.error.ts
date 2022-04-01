export default class InvalidPropError extends Error {
  constructor(prop: string) {
    super(`The param '${prop}' is invalid.`);
    this.name = 'InvalidPropError';
  }
}
