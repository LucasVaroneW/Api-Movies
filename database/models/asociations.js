const Person = require('./Person')
const Movie = require('./Movie')
const Cast = require('./Cast')
const dataMovies = require('../movies.json')
const dataPersons = require('../persons.json')
const dataRelations = require('../relations.json')


module.exports = async function dataJson(){


    for (let i = 0; i < dataRelations.length; i++) {
        var splitedName = dataRelations[i].fullName.split(' ')
        const person = dataPersons.find(({name, lastName}) => name === splitedName[0] && lastName === splitedName[1])
        const movie = dataMovies.find(({title}) => title === dataRelations[i].movieName)
    
        var actor = dataRelations[i].role.includes('actor')
        var director = dataRelations[i].role.includes('director')
        var producer = dataRelations[i].role.includes('producer')

        await loadData(movie,person,actor,director,producer)
        
    }
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

async function loadData (movie,person,actor,director,producer){
    try{
        await Movie.sync() 
        const [movieData, createdMovie] = await Movie.findOrCreate({where: { title: movie.title },
        defaults: {
            year: movie.year
        }})

        await Person.sync() 
        const [personData, createdPerson] = await Person.findOrCreate({where: { name: person.name,lastName: person.lastName},
        defaults: {
            age: person.age
        }})        
        personData.addMovie(movieData,{through:{actor:actor,producer:producer,director:director}})  
    }catch (error) {}
}   


