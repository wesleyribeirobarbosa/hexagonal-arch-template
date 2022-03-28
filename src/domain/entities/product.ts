import MissingParamError from './errors/error.missing.params';
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
    if (!name) return error(new MissingParamError('name').getMessage());
    if (!price) return error(new MissingParamError('price').getMessage());
    return success(new Product(name, price));
  }
}