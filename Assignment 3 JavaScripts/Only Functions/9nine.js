/* 
9. Electricity Bill Calculation with Peak Hours
Scenario:
An electricity board charges differently based on consumption and time:
Normal hours (8 AM - 8 PM)
Below 100 units → $5 per unit
100-300 units → $4 per unit
Above 300 units → $3 per unit
Peak hours (8 PM - 8 AM) → Extra 10% charge on all rates
Write a function calculateElectricityBill(units, timeOfDay) that returns the total bill.
*/


function calculateElectricityBill(units, timeOfDay) {
    let ratePerUnit;

    // Determine rate per unit based on consumption
    if (units <= 100) {
        ratePerUnit = 5;
    } else if (units <= 300) {
        ratePerUnit = 4;
    } else {
        ratePerUnit = 3;
    }

    // Check if it's peak hours (8 PM - 8 AM)
    if (timeOfDay >= 20 || timeOfDay < 8) {
        ratePerUnit *= 1.10; // Extra 10% charge
    }

    // Calculate total bill
    let totalBill = units * ratePerUnit;

    return totalBill.toFixed(2); // Return total bill rounded to 2 decimal places
}

// Example cases
console.log(calculateElectricityBill(50, 10));  // Normal hours, below 100 units
console.log(calculateElectricityBill(200, 22)); // Peak hours, 100-300 units
console.log(calculateElectricityBill(350, 5));  // Peak hours, above 300 units
console.log(calculateElectricityBill(150, 15)); // Normal hours, 100-300 units
