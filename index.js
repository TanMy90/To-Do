//require express module
const express = require('express');

//require path module
const path = require('path');

//define port number
const port = 8000;

//require db config
const db = require('./config/mongoose');
const todo_model = require('./models/todo');

//require contact db
const Todo = require('./models/todo');

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

    Todo.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }    
    
        return res.render('index',{
             todo: tasks
            // category: req.body.Category,
            // dueDate: req.body.dueDate
        });
    });
       

});


//create new contact CRUD => C
app.post('/create-task', function(req,res){
    // return res.redirect('/prac');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // contactsList.push({
    //         name:req.body.name,
    //         phone:req.body.phone
    //     });
    // return res.redirect('/');
    // contactsList.push(req.body);

    todo_model.create({
        description: req.body.description,
        category: req.body.Category,
        dueDate: req.body.dueDate
    }, function(err, newTask){
        if(err){
            console.log('error in creating a contact.');
            return;
        }

        console.log('***********', newTask);
        return res.redirect('back');
    });

    
});



//Delete existing contact CRUD => D
app.post('/delete-todo/:id', function(req,res){

    //get the id from query in the url
    // let id = req.query.id;

    //find the contact in db using id and delete it
    console.log(req.body);
    Todo.findByIdAndDelete({_id:{$in:req.body.id}}, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }

        return res.redirect('back');
    });

    
})


//listening on port
app.listen(port, function(err){
    if(err){ console.log('Error running the server', err); }
    
    console.log('Running on port: ', port);


});