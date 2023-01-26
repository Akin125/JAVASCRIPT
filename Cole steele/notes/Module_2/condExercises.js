/**
 * if age is negative
 *   print an error messag
 * 
 * if age is 21 
 *   print "happy 21st birthday!!"
 * 
 * if age is odd
 *   print "your age is odd!"
 * 
 * if age is a perfect square 
 *   print"perfect square"
 */


const prompt=require("prompt-sync")({sigint:true});

var age = Number(prompt("Enter your age:")); // need to convert to number prompt returns a string

if(age < 0 || age === 0){
    console.log("Please enter a positive integer age is negative or zero");
}else if(age % 2 !== 0){
    console.log("your age is odd!");
}

if(age === 21){
    console.log("happy 21st birthday!!");
}

if(age % Math.sqrt(age) === 0){
    console.log("perfect square!")
}

