var carManufacturer = ['Volvo', 'Toyota', 'Nissan', 'Lexus', 'Benz', 'Ford'];


// For loop method
for(var i = 0; i < carManufacturer.length; i++){
    console.log(carManufacturer[i], i, carManufacturer);
}

console.log(



);

//using the for each method
// syntax arrayVariable.forEach(anonymousFunction(){
//   
//});

// the for each will run the anonymous function the number of times the length of the array
// The anonymous function takes an argument that will run through the array and give the value of each index in the array

carManufacturer.forEach(function(num, i, carManufacturer){
    console.log("You........ ", num, i, carManufacturer);
});

// exercise
var numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(three){
    if(three % 3 ===0){
        console.log(three); // 3, 6 , 9
    }
});