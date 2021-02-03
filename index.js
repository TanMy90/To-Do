//require express module
const express = require('express');

//require path module
const path = require('path');

//define port number
const port = 8000;

// //require db config
// const db = require('./config/mongoose');

// //require contact db
// const Contact = require('./models/contact');

//call express
const app = express();

//set view engine to ejs
app.set('view engine','ejs');

//set path to views folder
app.set('views', path.join(__dirname, 'views'));

//use express urlencode
app.use(express.urlencoded())

//set path to assets folder
app.use(express.static('static'));




//home page
//fetching data and displaying on the page
app.get('/', function(req,res){

           
        return res.render('index');

       

});

//listening on port
app.listen(port, function(err){
    if(err){ console.log('Error running the server', err); }
    
    console.log('Running on port: ', port);


});