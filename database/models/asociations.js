const Person = require('./Person')
const Movie = require('./Movie')
const Cast = require('./Cast')
const dataMovies = require('../movies.json')
const dataPersons = require('../persons.json')
const dataRelations = require('../relations.json')


module.exports = function dataJson(){

    dataRelations.map(relation => {
        var splitedName = relation.fullName.split(' ')
        const person = dataPersons.find(({name, lastName}) => name === splitedName[0] && lastName === splitedName[1])
        const movie = dataMovies.find(({title}) => title === relation.movieName)

        var actor = relation.role.includes('actor')
        var director = relation.role.includes('director')
        var producer = relation.role.includes('producer')
        loadData(movie,person,actor,director,producer)
    })
};

// Una persona puede participar de muchas peliculas
Person.belongsToMany(Movie, {
    through: Cast,
    timestamps: false
})

// Una pelicula tiene muchas personas
Movie.belongsToMany(Person, {
    through: Cast,
    timestamps: false
})


function loadData (movie,person,actor,director,producer){
    (async () => {
        
        const movieData = await Movie.create({ title: movie.title ,year: movie.year})

        const personData = await Person.create({ name: person.name ,lastName: person.lastName , age: person.age })

        personData.addMovie(movieData,{through:{actor:actor,producer:producer,director:director}})
        
    })();
}


