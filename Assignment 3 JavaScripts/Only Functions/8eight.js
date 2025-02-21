/*
8. Fitness Membership Plan
Scenario:
A gym offers different membership plans:
Basic ($20/month) → Only gym access
Premium ($50/month) → Gym + Personal Trainer
VIP ($80/month) → Gym + Trainer + Diet Plan
Write a function choosePlan(planType, wantsTrainer, wantsDietPlan) that suggests the best membership.
*/

function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    let selectedPlan;

    // Determine the best plan based on user preferences
    if (wantsDietPlan) {
        selectedPlan = "VIP ($80/month) - Gym + Trainer + Diet Plan";
    } else if (wantsTrainer) {
        selectedPlan = "Premium ($50/month) - Gym + Personal Trainer";
    } else {
        selectedPlan = "Basic ($20/month) - Only Gym Access";
    }

    return selectedPlan;
}

// Example cases
console.log(choosePlan("Basic", false, false));  // Basic plan
console.log(choosePlan("Premium", true, false)); // Premium plan
console.log(choosePlan("VIP", true, true));      // VIP plan
console.log(choosePlan("Basic", false, true));   // VIP plan (Diet plan requested)