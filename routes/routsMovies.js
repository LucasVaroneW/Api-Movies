const express = require('express');
const router = express.Router();
const movies = require('../database/models/Movie');

router.get('/api/movies', (req, res) => {
    movies.findAll().then(movie => {
        res.json(movie);
    })
    console.log('funciono')
});

// router.get('/api/movies/cast', (req, res) => {
//     movies.findAll().then(movie => {
//         res.json(movie);
//     })
// });


// const [results, metadata] = await sequelize.query('SELECT...'); // Raw query - use array destructuring

// const results = await sequelize.query('SELECT...', { type: sequelize.QueryTypes.SELECT }); // SELECT query - no destructuring
// Params:

router.get('/api/movies/cast', (req, res) => {
    const project = Project.findAll({ where: { idUser: 3 }, include: [{
      model: Cast,
      as: 'cast',
      attributes: [ 'name' ],
      include: [{
        model: User,
        as: 'user',
        attributes: [ 'name' ]
      }]
    }]})
 })
 

module.exports = router