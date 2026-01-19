console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count){
    if (count >= 0) {
        for (let i = 0; i <= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    else {
        for  (let i = 0; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (userName = "John", age = 0){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age < 16){
        console.log(belowSixteen);
    }
    else {
        console.log(aboveSixteen);
    }
}
//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrantFinder (x = 0, y = 0){
    if (x === 0 && y === 0){
        console.log("In the middle");
    }
    else if (x === 0){
        console.log("On the y-axis");
    }
    else if (y === 0){
        console.log("On the x-axis");
    }
    else if (x > 0 && y > 0){
        console.log("Quadrant 1");
    }
    else if (x < 0 && y > 0){
        console.log("Quadrant 2");
    }
    else if (x < 0 && y < 0){
        console.log("Quadrant 3");
    }
    else if (x > 0 && y < 0){
        console.log("Quadrant 4");
    }
}
//Exercise 4 Section
console.log("EXERCISE 4:\n============\n");
function triangleDefiner(s1 = 0, s2 = 0, s3 = 0){
    if (s1 + s2 <= s3 || s2 + s3 <= s1 || s1 + s3 <= s2 || s1 === 0 || s2 === 0 || s3 === 0){
        return "Invalid Triangle"
    }
    else {
        if (s1 === s2 && s2 === s3){
            return "Equilateral Triangle";
        }
        else if (s1 === s2 || s2 === s3 || s1 === s3){
            return "Isosceles Triangle";
        }
        else {
            return "Scalene Triangle"
        }
    }
}
//Exercise 5 Section
console.log("EXERCISE 5:\n============\n");
function dataPlan(planLimit = 0, day = 1, usage = 0){
    let predictedAvg = planLimit / 30;
    let actualAvg = usage / day;
    let dataLeft = planLimit - usage;
    console.log(`${day} days used, ${30 - day} days remaining`);
    console.log(`Plan avg: ${predictedAvg.toFixed(2)} GB/day | Your avg: ${actualAvg.toFixed(2)} GB/day`);
    if (actualAvg > predictedAvg){
        console.log(`You are EXCEEDING your average daily use (${actualAvg} GB/day),`);
        if (usage > planLimit){
            console.log(`You have already exceeded your data plan for this month.`);
        }
        else{
            console.log("continuing this high usage, you'll exceed your data plan by");
            console.log(`${(actualAvg * 30.000) - planLimit} GB`);
            console.log(`To stay below your data plan, use no more than ${dataLeft / (30 - day)} GB/day`)
        }
    }
    else if (actualAvg < predictedAvg) {
        console.log(`You are using less than your average daily use (${actualAvg} GB/day),`);
        console.log("continuing this low usage, you'll be under you data plan limit by");
        console.log(`${planLimit - (actualAvg * 30.000)} GB`);
        console.log(`To reach your data plan limit, you can use up to ${dataLeft / (30 - day)} GB/day`)
    }
    else {
        console.log("You are using the average daily use.")
    }
}