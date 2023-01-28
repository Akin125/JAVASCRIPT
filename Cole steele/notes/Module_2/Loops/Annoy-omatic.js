// Ask the user "Are we there yet"
// Keep asking again and again until they enter "yes" or "yeah"
// then alert "yay, we finally made it!" 
// A user can enter any string as long as it has "yes"

// const prompt=require("prompt-sync")({sigint:true});
// var userInput = prompt("Are we there yet?(Enter Yes or Yeah if there)");



// while ((userInput !== "Yes") && (userInput !== "Yeah")){
//     var userInput = prompt("Are we there yet?(Enter Yes or Yeah if there)");
// }

// console.log("Yay, we finally made it!");

var userInput = prompt("Are we there yet?(Enter Yes or Yeah if there)");



while ((userInput.indexOf("yes") === -1) && (userInput.indexOf("yeah") === -1)){
    var userInput = prompt("Are we there yet?(Enter Yes or Yeah if there)");
}

alert("Yay, we finally made it!");