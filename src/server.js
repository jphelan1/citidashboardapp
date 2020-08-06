/*
    Sets up Express server on port 3000 to provide an API access point between the MongoDB and Angular front-end
*/
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
var app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

// Creates a Helpreq object from the Form Data
var Helpreq = require('./models/helpreq.js')
 
app.use(cors())
 
// Sets API Post endpoint at /helpreqs
app.post('/helpreqs', (req, res) => {
    var helpreqData = req.body;
    var helpreq = new Helpreq(helpreqData);
 
    helpreq.save((err, result) => {
        if (err) {
            console.log("error saving help request.")
        }
 
        res.sendStatus(200);
    })
})


// Connection to MongoDB cluster
mongoose.connect(
    'mongodb+srv://zsprint:zsprint@cluster0.sad5j.mongodb.net/financialDashboard?retryWrites=true&w=majority',  { useNewUrlParser: true }
).then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error(err,'Database connection error')
  })
 
app.listen(3000)