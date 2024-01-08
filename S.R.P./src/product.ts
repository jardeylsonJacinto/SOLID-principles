import { CartItem } from './protocolls/cart-item'

export class Product implements CartItem {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
