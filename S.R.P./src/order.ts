import { Messaging } from './messaging'
import { OrderStatus } from './protocolls/order-status'
import { ShoppingCart } from './shopping-cart'

export class Order {
  private _orderStatus: OrderStatus = 'open'

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      return console.log('Your cart is empty!')
    }

    this._orderStatus = 'closed'
    this.messaging.sendMessage(
      `Your order with a total of ${this.cart.total} has been received!`,
    )
    this.saveOrder()
    this.cart.clear()
  }

  saveOrder(): void {
    return console.log('Order saved successfuly')
  }
}
