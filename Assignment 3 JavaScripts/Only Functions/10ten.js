/*10. Flight Ticket Booking System
Scenario:
A flight booking system applies the following rules:
Base fare: $300
Additional charges:
Business class: +$200
First class: +$500
Luggage over 20kg: +$50 per 10kg extra
Discounts:
Students → 15% off
Seniors (above 60 years old) → 10% off
Write a function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) that returns the final price.
*/

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let extraCharges = 0;

    // Additional charges based on class type
    if (classType === "Business") {
        extraCharges += 200;
    } else if (classType === "First") {
        extraCharges += 500;
    }

    // Additional charges for extra luggage
    if (luggageWeight > 20) {
        let excessWeight = luggageWeight - 20;
        extraCharges += Math.ceil(excessWeight / 10) * 50;
    }

    // Total fare before discounts
    let totalFare = baseFare + extraCharges;

    // Applying discounts
    if (isStudent) {
        totalFare *= 0.85; // 15% off for students
    } else if (isSenior) {
        totalFare *= 0.90; // 10% off for seniors
    }

    return totalFare.toFixed(2); // Returns the fare rounded to two decimal places
}

// Example cases
console.log(calculateFlightFare("Business", 25, true, false)); // Student in Business class with 25kg luggage
console.log(calculateFlightFare("Economy", 30, false, true)); // Senior in Economy class with 30kg luggage
console.log(calculateFlightFare("First", 15, false, false)); // Regular passenger in First class with 15kg luggage
