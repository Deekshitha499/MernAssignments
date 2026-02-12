/*
 ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                          }
                            */
import { getProductById, checkStock
    } from './product.js';

let cartItems = [];

// 1. Add to cart
export function addToCart(productId, quantity) {
    const product = getProductById(productId);
    if (!product) {
        return `Product ID ${productId} not found.`;
    }
    if (!checkStock(productId, quantity)) {
        return `Insufficient stock for product ID ${productId}.`;
    }
    const existingItem = cartItems.find(item => item.productId === productId);
    if (existingItem) {
        // Update quantity if item already exists
        cartItems = cartItems.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
    } else {
        // Add new item to cart
        cartItems.push({ productId, quantity });
    }
    return `Product added to cart successfully.`;
}
// 2. Remove from cart
export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.productId !== productId);
    return `Product removed from cart successfully.`;
}
// 3. Update quantity
export function updateQuantity(productId, newQuantity) {
    if (!checkStock(productId, newQuantity)) {
        return `Insufficient stock for product ID ${productId}.`;
    }
    cartItems = cartItems.map(item =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    return `Quantity updated successfully.`;
}
// 4. Get cart items
export function getCartItems() {
    return cartItems.map(item => {
        const product = getProductById(item.productId);
        return {
            product,
            quantity: item.quantity
        };
    }
    );
}
// 5. Get cart total
export function getCartTotal() {
    return cartItems.reduce((total, item) => {
        const product = getProductById(item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}
// 6. Clear cart
export function clearCart() {
    cartItems = [];
    return `Cart cleared successfully.`;
}

