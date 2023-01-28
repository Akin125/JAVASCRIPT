console.log("TASK 1");
// print all numbers from -10 and 19

// set count to -10
// while havin the argument (count <= 19)
// print out 
// Increment the count

var i = -10;

while( i <= 19){
    console.log(i)
    i++;
}



console.log("TASK 2");
// print out all even numbers between 10 and 40

// set count to 10
// while having argument (count <= 40)
// if statement to get the even numbers (count % 2 === 0)
// print out 
// increment the count 


var count = 10;

while(count <= 40){

    if(count % 2 === 0){
        console.log(count);
    }

    count++;
}


console.log("TASK 3");

// print all the odd numbers between 300  and 333

// set count to 300
// while having argument (count <= 333)
// if statement to get the even numbers (count % 2 !== 0)
// print out 
// increment the count 

var j = 300;

while(j <= 333){

    if(j % 2 !== 0){
        console.log(j);
    }

    j++;
}


console.log("TASK 4");

// print all numbers divisible by 5 and 3 between 5 and 50

// set count to 5
// while having argument (count <= 50)
// if statement to get the even numbers ((count % 5 === 0) || (count % 3 === 0))
// print out 
// increment the count 

var k = 5;

while(k <= 50){

    if((k % 3 === 0) || (k % 5 === 0)){
        console.log(k);
    }

    k++;
}