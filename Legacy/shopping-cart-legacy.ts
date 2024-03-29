type CartItem = { name: string; price: number }
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = []
  private _orderStatus: OrderStatus = 'open'

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2)
  }

  checkout(): void {
    if (this.isEmpty()) {
      return console.log('Your cart is empty!')
    }

    this._orderStatus = 'closed'
    this.sendMessage(
      `Your order with a total of ${this.total} has been received!`,
    )
    this.saveOrder()
    this.clear()
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  sendMessage(msg: string): void {
    console.log('Message sent: ', msg)
  }

  saveOrder(): void {
    return console.log('Order saved successfuly')
  }

  clear(): void {
    this._items.length = 0
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Tablet', price: 500.00 });
shoppingCart.addItem({ name: 'Celular', price: 7500.00 });
shoppingCart.addItem({ name: 'Notebook', price: 8000.00 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);