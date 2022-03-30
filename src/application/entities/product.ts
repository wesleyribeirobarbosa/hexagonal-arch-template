import { Either, error, success } from '../../shared/either';

export default class Product {
  private readonly name: string;
  private readonly price: string;

  constructor (name: string, price: string) {
    this.name = name;
    this.price = price;
    Object.freeze(this);
  }

  static create (name: string, price: string): Either<string, Product> {
    if (!name) return error('Error: name missing!');
    if (!price) return error('Error: price missing!');
    return success(new Product(name, price));
  }
}