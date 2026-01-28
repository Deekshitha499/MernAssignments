
import { 
  getAllProducts, 
  searchProducts 
} from './product.js';

import { 
  addToCart, 
  getCartItems, 
  getCartTotal,
  updateQuantity,
  removeFromCart 
} from './cart.js';

import { processPayment } from './payment.js';

console.log('=== E-Commerce Store ===\n');

console.log('All Products:');
console.log(getAllProducts());

console.log('\nSearch "phone":');
console.log(searchProducts('phone'));

console.log('\n=== Add to Cart ===');
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log('\nCart Items:');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());

console.log('\nUpdate Quantity:');
console.log(updateQuantity(1, 2));

console.log('\nRemove Item:');
console.log(removeFromCart(3));

console.log('\nUpdated Cart:');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());

console.log('\n=== Checkout ===');
console.log(processPayment('upi', 'WELCOME10'));
