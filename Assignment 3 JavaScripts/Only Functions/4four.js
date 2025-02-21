/*
4. Smart Traffic Light System
Scenario:
A smart traffic light changes signals based on traffic density:
"Heavy Traffic" → Green for 60 seconds
"Moderate Traffic" → Green for 40 seconds
"Light Traffic" → Green for 20 seconds
Write a function trafficLightControl(density) that returns how long the green signal will stay on.
*/

function trafficLightControl(density) {
    let greenTime;

    // Determine green light duration based on traffic density
    if (density === "Heavy Traffic") {
        greenTime = 60;
    } else if (density === "Moderate Traffic") {
        greenTime = 40;
    } else if (density === "Light Traffic") {
        greenTime = 20;
    } else {
        return "Invalid traffic density";
    }

    return `Green light will stay on for ${greenTime} seconds.`;
}

// Example cases
console.log(trafficLightControl("Heavy Traffic"));    // Green for 60 seconds
console.log(trafficLightControl("Moderate Traffic")); // Green for 40 seconds
console.log(trafficLightControl("Light Traffic"));    // Green for 20 seconds
console.log(trafficLightControl("No Traffic"));       // Invalid input
