var myNum_1 = 7;
var myNum_2 = 10;

// = -> Assignment operator
var myName = "Seyifunmi";
console.log(myName); // prints out Seyifunmi

// + -> Addition
var Addition = myNum_1 + myNum_2;
console.log(Addition); // prints out 17

// - -> Subtraction
var Subtraction = myNum_2 - myNum_1;
console.log(Subtraction);  // prints out 3

// * -> Multiplication 
var mult = myNum_1 * myNum_2;
console.log(mult); // prints out 70

// / -> division 
var div = myNum_2 / myNum_1;
console.log(div); // prints out 1.4285. 

// % -> modulos 
var mod = myNum_1 % myNum_2;
console.log(mod); //prints out 7

/////
const prompt=require("prompt-sync")({sigint:true});

var userName;

userName = prompt ("What is your name? ") 

console.log("Good morning, " + userName);