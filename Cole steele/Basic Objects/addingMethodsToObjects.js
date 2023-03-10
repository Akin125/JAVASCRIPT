// this is adding a function to an object with helps avoid name collision and helps organise our codes

// lets say i have an object man

let man = {
    name: 'Peter',
    class: '200 level',
    isCool: false,
    add: function doMaths (x, y){
        return x * y;
    }
};



console.log(man.name); // "Peter"
console.log(man.add(2,3));

// it also enables us to use a single function name for different objects
let speakCats = {};
let speakDog = {};

speakCats.speak = function sound(){
    return 'Meow!';
}


speakDog.speak = function sound(){
    return "Woof!";
}

console.log(speakDog.speak());

console.log(speakDog.speak(), speakCats.speak());