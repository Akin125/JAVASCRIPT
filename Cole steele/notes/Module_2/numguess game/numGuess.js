// create a secret number
// collect users guess
// check if correct
// check if wrong
// check if higer
// check if lower 

var secretNum = 6;

var stringGuess = prompt("Enter your guess:");

numGuess = Number(stringGuess);

if(secretNum === numGuess){
    alert("Your guess is corect");
}
else if (secretNum > numGuess){
    alert("Guess is low, try again");
}

else if (secretNum < numGuess){
    alert("Guess is low, try again");
}

