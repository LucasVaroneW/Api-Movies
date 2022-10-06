const Movie = require ('../database/models/Movie')

const controllerMovie = {
    findMovie: async (req, res) => {
        var id = req.params.id
        try {
            const movie = await Movie.findAll({
                where: { id: id },
                        include: [{ all:true, nested:true }]
            })
            if(movie){
                return res.json({movie, "consol": console.log('Successful connection')})
            }
            else {
                return res.status(500).json('An error has occurred')
            }
            
        }catch (error) {
            res.status(500).json('An error has occurred, check the parameters')
        }
    }
}

module.exports = controllerMovie;
