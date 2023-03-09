// create a function theta checks if an array is uniform

var cars = ['Volvo', 'Ford', 'Carmry'];

// function isUniform(unknown){
//     var firstElement = unknown[0];
//     for( var i = 1; i < unknown.length; i++){
//         if(unknown[i] !== firstElement){
//            console.log("FALSE");
//         }else{
//            console.log("TRUE");
//         }
//     }
// }



function isUniform(unknown){
    var firstElement = unknown[0];
    unknown.forEach(function(element){
        if(unknown[element] !== firstElement)
        {
            console.log(false);
        }
        console.log(true);
    });
}

isUniform([1,1,1,1]);