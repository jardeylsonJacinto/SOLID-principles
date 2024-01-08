import { Messaging } from './services/messaging'
import { Order } from './entities/order'
import { Persistency } from './services/persistency'
import { Product } from './entities/product'
import { ShoppingCart } from './entities/shopping-cart'

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
