// Writ a function that converts - to _


function kebabToSnake(str)
{
    return str.replace(/-/g, '_');
}

console.log(kebabToSnake("Hello-World"));
