//create a function that reverse an array


function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
    return 0;
}

var Phone_Number = [0,7,0,1,6,8,9,6,4,1,9];

printReverse(Phone_Number);