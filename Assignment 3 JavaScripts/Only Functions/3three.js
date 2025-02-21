/*
3. Student Grading System with Extra Credit
Scenario:
A school assigns grades based on marks and awards extra credit if attendance is above 90%.
Grading:
90+ → "A"
80-89 → "B"
70-79 → "C"
60-69 → "D"
Below 60 → "F"
If attendance is above 90%, add 5 extra marks
Write a function calculateGrade(marks, attendance) that returns the student's final grade.
*/


function calculateGrade(marks, attendance) {
    // Apply extra credit if attendance is above 90%
    if (attendance > 90) {
        marks += 5;
    }

    // Determine the grade based on the final marks
    let grade;
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

// Example test cases
console.log("Final Grade:", calculateGrade(88, 95)); // Extra credit applied, final marks 93 → "A"
console.log("Final Grade:", calculateGrade(85, 80)); // No extra credit, final marks 85 → "B"
console.log("Final Grade:", calculateGrade(78, 92)); // Extra credit applied, final marks 83 → "B"
console.log("Final Grade:", calculateGrade(50, 91)); // Extra credit applied, final marks 55 → "F"
console.log("Final Grade:", calculateGrade(60, 85)); // No extra credit, final marks 60 → "D"
