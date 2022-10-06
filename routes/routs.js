const express = require('express');
const router = express.Router();
const controllerMovie = require('../controllers/controllerMovie')
const controllerPerson = require('../controllers/controllerPerson')




router.get('/api/movies/:id', controllerMovie.findMovie);
router.get('/api/persons/:id', controllerPerson.findPerson);

 

module.exports = router