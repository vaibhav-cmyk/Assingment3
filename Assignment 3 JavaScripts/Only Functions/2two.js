/*
2. Online Shopping Discount & Free Shipping
Scenario:
An online store offers the following:
Discounts:
20% for orders above $1000
10% for orders between $500 and $1000
No discount below $500
Free shipping for orders above $50
Express shipping ($10) for all orders below $50
Write a function calculateFinalAmount(orderAmount) that returns the final payable amount after discount and applicable shipping charges.
*/


function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingFee = 0;

    // Apply discount based on order amount
    if (orderAmount > 1000) {
        discount = orderAmount * 0.20; // 20% discount
    } else if (orderAmount >= 500) {
        discount = orderAmount * 0.10; // 10% discount
    }

    let discountedAmount = orderAmount - discount;

    // Apply shipping charges
    if (discountedAmount < 50) {
        shippingFee = 10; // Express shipping for orders below $50
    }

    let finalAmount = discountedAmount + shippingFee;
    return finalAmount.toFixed(2); // Return final amount rounded to 2 decimal places
}

// Example test cases
console.log("Final Amount:", calculateFinalAmount(1200)); // 20% discount, free shipping
console.log("Final Amount:", calculateFinalAmount(800));  // 10% discount, free shipping
console.log("Final Amount:", calculateFinalAmount(400));  // No discount, free shipping
console.log("Final Amount:", calculateFinalAmount(40));   // No discount, express shipping ($10)
console.log("Final Amount:", calculateFinalAmount(60));   // No discount, free shipping

