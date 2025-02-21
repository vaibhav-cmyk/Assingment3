/*
7. E-commerce Coupon Redemption
Scenario:
An e-commerce store offers coupon-based discounts:
Coupon "DISCOUNT10" → 10% off for orders above $500
Coupon "FREESHIP" → Free shipping for orders above $200
Both coupons cannot be used together
Write a function applyCoupon(orderAmount, couponCode) that calculates the final price.
*/

function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let shippingFee = 20; // Assume a flat $20 shipping fee if not free

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = orderAmount * 0.10; // 10% off
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        shippingFee = 0; // Free shipping
    }

    let finalAmount = orderAmount - discount + shippingFee;
    return finalAmount.toFixed(2); // Return the final price rounded to 2 decimal places
}

// Example cases
console.log(applyCoupon(600, "DISCOUNT10")); // 10% discount applied
console.log(applyCoupon(250, "FREESHIP"));   // Free shipping applied
console.log(applyCoupon(150, "FREESHIP"));   // No coupon applied (order too low)
console.log(applyCoupon(700, ""));           // No coupon applied
