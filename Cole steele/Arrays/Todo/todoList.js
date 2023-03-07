// new - Add a to do
// list- View all todos
// quit - quit app 

/**
 *  create an empty array to store the incoming todos
 *  prompt what they will like to do and store it in a varible (input)
 *  start a while loop, while input is not equal to Quit
 *  while(input !== "quit") NOTE: if input === "Quit" console that the app will quit
 *      if (input === "New")
 *          prompt the to add their task and store in a variable (newTask)
 *          push what is stored in the variable into the todo array
 *      else if (input === "list")
 *          console all the todo array  
 *  to infinity loop prompt whatbthey will like to do again
*/



//const prompt=require("prompt-sync")({sigint:true}); //DO NOT TOUCH

var myTodo = [];

var userInput = prompt("What will you like TODO? (\"New\" - Add a todo), (\"List\" - View all todos), (\"Quit\" - Quit App)  ");

while(userInput !== "Quit"){

    if(userInput === "New"){
        var newTask = prompt("Add what you would like to do:  ");
        console.log(myTodo.push(newTask)); 
    }

    else if(userInput === "List"){
        console.log(myTodo);
    }

 var userInput = prompt("What will you like TODO? (\"New\" - Add a todo), (\"List\" - View all todos), (\"Quit\" - Quit App)  ");
}
console.log("Quiting App.....");
console.log("App quitted Successfully");
