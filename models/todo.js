//require mongoose
const mongoose = require('mongoose');

//create contact schema
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    dueDate:{
        type:Date,
        required:true
    }

});

//create model
const todo_model = mongoose.model('Todo', todoSchema);

//export contact model
module.exports = todo_model;