// Ask the user to enter their age and store in a variable
// To convert to days roughly multiply by 365 create a function 
// Return to the user 
// NOTE: this code is  running  consedering the leap year 


// const prompt=require("prompt-sync")({sigint:true});

function ageToYears (a){
    let userAge = a;
    return(a * 365.25);  // to consider leap year find the average of 366, 365, 365, 365. you use this average(365.25) instead of 365 alone
}

var age = prompt("Enter your age(numbers only):");

alert("Click OK to confirm you are " + age + " years of age"); //to know it works

var ageInDays = ageToYears(age);

console.log("If you are " + age + "  years old. " + "You have roughly lived for " + ageInDays + " days");
alert("If you are " + age + " years old. " + "You have roughly lived for " + ageInDays + " days");
