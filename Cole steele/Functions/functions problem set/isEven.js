// Write a function which takes a single numeric argument and returns true if even and false if odd.

// define the function (x)
// if x % 2 === 0 
//  print True
// else
//    print false

function isEven(x){
    if(x % 2 === 0){
        return true;
    }else{
        return false;
    }
}

// calling the function 

console.log(isEven(2)); // True
console.log(isEven(3));// False