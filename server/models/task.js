var mongoose = require('mongoose')

var TaskSchema = new mongoose.Schema({
    title:  { type: String, required: true, minlength: 2},
    description:  { type: String, required: true, minlength: 5},
    completed:  { type: Boolean, required: [true, "Must be of type Bool"]}
}, {timestamps: true });

module.exports = mongoose.model('Task', TaskSchema); 
var Task = mongoose.model('Task')