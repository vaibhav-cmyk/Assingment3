/*
5. Movie Ticket Pricing with Time and Age Discount
Scenario:
A movie theater offers tickets with dynamic pricing:
Standard price: $12
Matinee show (before 5 PM) → 20% discount
Senior citizens (above 60) → 30% discount
Children (below 12) → 40% discount
Write a function calculateTicketPrice(age, showTime) that returns the final ticket price.
*/


function calculateTicketPrice(age, showTime) {
    let standardPrice = 12;
    let discount = 0;

    // Apply age-based discounts
    if (age > 60) {
        discount = 0.30; // 30% off for seniors
    } else if (age < 12) {
        discount = 0.40; // 40% off for children
    }

    // Apply matinee discount (before 5 PM)
    if (showTime < 17) {
        discount = Math.max(discount, 0.20); // 20% off, but keeps the highest discount
    }

    let finalPrice = standardPrice * (1 - discount);
    return finalPrice.toFixed(2); // Return final price rounded to 2 decimal places
}

// Example cases
console.log(calculateTicketPrice(65, 14)); // Senior citizen during matinee (30% discount)
console.log(calculateTicketPrice(10, 16)); // Child during matinee (40% discount)
console.log(calculateTicketPrice(30, 18)); // Regular adult (No discount)
console.log(calculateTicketPrice(50, 14)); // Matinee show for adult (20% discount)
console.log(calculateTicketPrice(8, 20));  // Child during evening (40% discount)