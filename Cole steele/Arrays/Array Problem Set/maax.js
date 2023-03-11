// write a function that prints the maximum number in an array

var myNumber = [2,4,12,223,27];

function max (arr){
    var firstElemet = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > firstElemet){
            firstElemet = arr[i];
        }
    }

    console.log(firstElemet);
}

max(myNumber);