const mongoose = require('mongoose')
var Task = require('../models/task')
const tasks = require('../controllers/tasks')
module.exports = function(app){
    app.get('/tasks', function(req, res) {
        tasks.index(req, res);
    })
    app.post('/tasks', function(req, res) {
        tasks.create(req, res);
    })

    app.get('/tasks/:id', function(req, res) {
        tasks.show(req, res);
    })
    app.put('/tasks/:id', function(req, res) {
        tasks.update(req, res);
    })
    app.delete('/tasks/:id', tasks.destroy)
}
