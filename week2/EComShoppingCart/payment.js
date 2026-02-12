/*iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            // 2. Apply discount if coupon provided
                            // 3. Validate payment method (card/upi/cod)
                            // 4. Process payment (simulate)
                            // 5. Reduce stock for all items
                            // 6. Clear cart
                            // 7. Generate order summary
                            
                            // Return order summary:
                            // {
                            //   orderId: ...,
                            //   items: [...],
                            //   subtotal: ...,
                            //   discount: ...,
                            //   total: ...,
                            //   paymentMethod: ...,
                            //   status: 'success/failed',
                            //   message: '...'
                            // }
                          }
                          
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }
*/
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Validate payment method
export function validatePaymentMethod(method) {
    const validMethods = ['card', 'upi', 'cod'];
    return validMethods.includes(method);
}

// Process payment
export function processPayment(paymentMethod, couponCode = null) {
    const cartItems = getCartItems();
    if (cartItems.length === 0) {
        return {
            orderId: null,
            items: [],
            subtotal: 0,
            discount: 0,
            total: 0,
            paymentMethod: paymentMethod,
            status: 'failed',
            message: 'Cart is empty.'
        };
    }
    if (!validatePaymentMethod(paymentMethod)) {
        return {
            orderId: null,
            items: [],
            subtotal: 0,
            discount: 0,
            total: 0,
            paymentMethod: paymentMethod,
            status: 'failed',
            message: 'Invalid payment method.'
        };
    }
    const cartTotal = getCartTotal();
    const discountDetails = applyDiscount(cartTotal, couponCode, cartItems);
    const orderId = generateOrderId();
    reduceStock(cartItems);
    clearCart();
    return {
        orderId: orderId,
        items: cartItems,
        subtotal: cartTotal,
        discount: discountDetails.discount,
        total: discountDetails.finalTotal,
        paymentMethod: paymentMethod,
        status: 'success',
        message: 'Payment processed successfully.'
    };
}
// Generate random order ID
function generateOrderId() {
    return 'ORD' + Date.now();
}
