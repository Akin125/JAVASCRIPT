// create a function that sums up numbers in an array

function sum(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        var element = arr[i];
        total = total + element;
    }
    console.log(element);
    console.log(total);
}


sum([1,2,3,4,5,6,7,8,9]);