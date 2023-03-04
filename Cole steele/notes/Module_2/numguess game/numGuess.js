// create a secret number
// collect users guess
// check if correct
// check if wrong
// check if higer
// check if lower 
const prompt=require("prompt-sync")({sigint:true});

var secretNum = 6;

var stringGuess = prompt("Enter your guess:");
//console.log(typeof stringGuess);

numGuess = Number(stringGuess);

//console.log(typeof numGuess);

if(secretNum === numGuess){
    alert("Your guess is corect");
}
else if (secretNum > numGuess){
    alert("Guess is low, try again");
}

else if (secretNum < numGuess){
    alert("Guess is low, try again");
}

