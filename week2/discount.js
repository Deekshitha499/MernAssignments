
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': {
    type: 'percentage',
    value: 20,
    minAmount: 10000,
    category: 'electronics'
  }
};

export function validateCoupon(code, cartTotal, cartItems) {
  const coupon = coupons[code];
  if (!coupon) return { valid: false, message: "Invalid coupon" };

  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Cart value too low for coupon" };
  }

  if (coupon.category) {
    const hasCategory = cartItems.some(
      item => item.category === coupon.category
    );
    if (!hasCategory) {
      return { valid: false, message: "Coupon not applicable to cart items" };
    }
  }

  return { valid: true, message: "Coupon applied" };
}

export function calculateDiscount(code, cartTotal) {
  const coupon = coupons[code];
  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  }
  return coupon.value;
}

export function applyDiscount(cartTotal, code, cartItems) {
  const validation = validateCoupon(code, cartTotal, cartItems);
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  const discount = calculateDiscount(code, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied"
  };
}
