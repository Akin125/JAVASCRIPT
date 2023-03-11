var carTypes = ["Toyota", "Volvo", "Benz", "Nissan", "Mazda", "Lexus"];

for(var i = 0; i < carTypes.length; i++){
    console.log('Teminikan  ' + carTypes[i], i, carTypes);
}

carTypes.forEach(function userName(num, i, carTypes) {
console.log('Teminikan  ' , num, i, carTypes);
});

