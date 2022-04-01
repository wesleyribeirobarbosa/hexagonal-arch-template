export default class InvalidPropError extends Error {
  constructor(prop: any) {
    super(`The param "${prop}" is invalid.`);
    this.name = 'InvalidPropError';
  }
}
