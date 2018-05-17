const mongoose = require('mongoose')
var Task = require('../models/task')

module.exports.index = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
            res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
            res.json({data: tasks})
        }
    })
}
module.exports.create = function(req, res){
    var task = new Task({title: req.body.title, description: req.body.description, completed: false})
    task.save(function(err, newtask){
        if(err){
            console.log(err.message)
            res.json(err.message)
        } else {
            res.json(newtask)
        }
    })
}
module.exports.update = function(req, res){
    Task.findOne({_id: req.params.id}, function(err, task){
        if (err) {
            console.log('hello')
            res.json(err.message)
        }
        task.completed = true;
        task.save(function(err){
            if (err) {
                console.log('unable to save')
                res.json(err.message)
            }
            res.json(task)
        })
    })
}
module.exports.show = function(req, res){
    Task.findOne({_id: req.params.id}, function(err, task){
        if (err) {
            console.log('hello')
            res.json(err.message)
        }
        res.json({task})
    })
}
module.exports.destroy = function(req, res){
    Task.remove({_id: req.params.id}, function(err, task) {
        if (err) { 
            console.log(err);
            res.json(err)
        }
        res.json(task)
    })
}