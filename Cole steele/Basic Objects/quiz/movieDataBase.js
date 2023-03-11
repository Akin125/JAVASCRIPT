// create an array of movie objects. Each movie shuld have a title, rating, and hasWatched properties. Iterate through the array and print out something that looks like: You have watched 'in bruges' - 5 stars, you hav not seen 'frozen' - 4.5 stars

var movies =[
    {
        title: 'Black-Panther',
        rating: 5,
        hasWatched: true
    },

    {
        title: 'Women King',
        rating: 4.5,
        hasWatched: false
    },

    {
        title: 'Family Guy',
        rating: 3,
        hasWatched: false
    },

    {
        title: 'Far from Home',
        rating: 2,
        hasWatched: true
    }
];

movies.forEach(function(movie){
    var result = 'You have ';
    if (movie.hasWatched){
        result += 'watched ';
    }else{
        result += 'not seen ';
    }

    result += "\""+  movie.title+ "\" - ";
    result += movie.rating + " stars";
    console.log(result);
});


