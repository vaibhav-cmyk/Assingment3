/*
6. Job Application Filter
Scenario:
A company is hiring and requires candidates to meet the following conditions:
Age must be between 21 and 55
Experience must be at least 2 years
Minimum qualification: "Bachelor's Degree"
Write a function isEligibleForJob(age, experience, qualification) that returns whether the applicant is eligible.
*/


function isEligibleForJob(age, experience, qualification) {
    // Check all eligibility conditions
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree" || qualification === "Master's Degree") {
        return "Eligible for the job";
    } else {
        return "Not eligible for the job";
    }
}

// Example cases
console.log(isEligibleForJob(25, 3, "Bachelor's Degree"));  // Eligible
console.log(isEligibleForJob(20, 4, "Bachelor's Degree"));  // Not eligible (Age < 21)
console.log(isEligibleForJob(30, 1, "Bachelor's Degree"));  // Not eligible (Experience < 2 years)
console.log(isEligibleForJob(40, 5, "Master's Degree"));    // Eligible (Master's degree still qualifies)
console.log(isEligibleForJob(56, 6, "Bachelor's Degree"));  // Not eligible (Age > 55)
