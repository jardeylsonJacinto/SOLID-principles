import { ShoppingCart } from './shopping-cart'

const shoppingCart = new ShoppingCart()
shoppingCart.addItem({ name: 'Tablet', price: 500.0 })
shoppingCart.addItem({ name: 'Celular', price: 7500.0 })
shoppingCart.addItem({ name: 'Notebook', price: 8000.0 })

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.orderStatus)
shoppingCart.checkout()
console.log(shoppingCart.orderStatus)
