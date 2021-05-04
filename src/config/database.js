const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://TiagoGomes:<4VnNqWCeXSpkIPUb>@todobackend.4chph.mongodb.net/ToDoBackend?retryWrites=true&w=majority')
//mongodb://localhost/todo
