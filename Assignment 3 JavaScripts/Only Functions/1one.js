/*
1. ATM Withdrawal System
Scenario:
A customer wants to withdraw money from an ATM. Write a function atmWithdrawal(balance, amount, pin, enteredPin) that checks:
If enteredPin matches pin, proceed. Otherwise, return "Incorrect PIN"
If amount > balance, return "Insufficient Funds"
If amount is a multiple of 100, allow withdrawal, else return "Enter amount in multiples of 100"
*/

function atmWithdrawal(balance, amount, pin, enteredPin) {
    // Check if the entered PIN is correct
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }

    // Check if the withdrawal amount exceeds the balance
    if (amount > balance) {
        return "Insufficient Funds";
    }

    // Check if the withdrawal amount is a multiple of 100
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }

    // Successful withdrawal
    balance -= amount;
    return `Withdrawal successful. Remaining balance: $${balance}`;
}

// Example test cases
console.log(atmWithdrawal(5000, 1000, 1234, 1234)); // Successful withdrawal
console.log(atmWithdrawal(3000, 3500, 5678, 5678)); // Insufficient funds
console.log(atmWithdrawal(2000, 750, 4321, 4321));  // Not a multiple of 100
console.log(atmWithdrawal(4000, 500, 1111, 2222));  // Incorrect PIN
console.log(atmWithdrawal(1000, 100, 9999, 9999));  // Successful withdrawal