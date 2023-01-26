// if below 18 can`t enter
// if between 18 and 21 can enter but no drink
// if 21 and above can enter and have a drink

const prompt=require("prompt-sync")({sigint:true});

var age = prompt("Enter your age to know if you can enter:")

if(age < 18){
    console.log("Sorry, you are not old enough to enter");
}

else if(age < 21){
    console.log("You can enter, but no drinks");
}

else{
    console.log("You can enter and have a drink");
}