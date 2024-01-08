import { Messaging } from './messaging'
import { Order } from './order'
import { Persistency } from './persistency'
import { Product } from './product'
import { ShoppingCart } from './shopping-cart'

const shoppingCart = new ShoppingCart()
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product('Tablet', 500.0))
shoppingCart.addItem(new Product('Celular', 7500.0))
shoppingCart.addItem(new Product('Notebook', 8000.0))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
