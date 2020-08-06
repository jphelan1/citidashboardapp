var mongoose = require('mongoose')
 
module.exports = mongoose.model('helpreq', {
    name: String,
    email: String,
    help: String
})