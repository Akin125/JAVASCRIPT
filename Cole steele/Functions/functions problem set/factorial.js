// Write a function which takes a single numeric argument and returns the factorial of that number 

// using loop method
// define the function factorial(num)
// define a variable to store the result set it to 1
//  if (num === 0 || num === 1) return 1;
// for(var i = 1; i <= num; i++)
//      result *= i;
// return result
// 

function factorial(num){
    var result = 1;
    if (num === 0 || num === 1){
        return 1;
    }else{
        for( var i = 1; i <= num; i++ ){
            result *= i;
        }
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(1)); // 1