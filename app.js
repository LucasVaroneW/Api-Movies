const express = require('express');
const app = express()
const sequelize = require('./database/db');
const dataJson = require('./database/models/asociations')
const routs = require ('./routes/routs')

// Setting
const PORT = 3000;

// Routs
app.get('/', function(req, res){
    console.log('Hello World!')
});

app.use(routs)

// Start server and
app.listen(PORT, function(){
    console.log(`App listening on port http://localhost:${PORT}/`)

    // Conect with database and create tabls
    // Force true: DROP TABLE
    sequelize.sync( {force: true} ).then(() => {
        console.log("Successful connection")
        //Load data to mySQL
        dataJson()
    }).catch( error => {
        console.log('error occurred', error);
    })

})


