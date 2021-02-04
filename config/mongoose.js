const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo_db')

//acquire the connection, check if it is successful
const db = mongoose.connection;


//error connecting to db
db.on('error', console.error.bind(console, 'error connecting to db'));


//db is running
db.once('open', function(){
    console.log("Successfully connected to database");
});