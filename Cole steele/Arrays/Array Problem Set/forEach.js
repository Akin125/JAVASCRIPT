// creating forEach
var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];

function myForEach(arr, func){
    for(var i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}



myForEach(colors, function(){
    console.log(1);
});


// VERSION 2 
// =========
Array.prototype.myForEach = function(func){
    for(var i = 0; i < this.length; i++) {
     func(this[i]);
    }
};

colors.myForEach(function(colors){
    console.log(colors);
} );
