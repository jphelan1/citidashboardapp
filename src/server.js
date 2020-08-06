var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var Helpreq = require('./models/helpreq.js')
 
app.use(cors())
 
/*app.get('/events', async (req, res) => {
    var events = await Event.find({});
    res.send(events);
})*/
 
app.post('/helpreqs', (req, res) => {
   console.log("here")
    var helpreqData = req.body;
    var helpreq = new Helpreq(helpreqData);
 
    helpreq.save((err, result) => {
        if (err) {
            console.log("error saving help request.")
        }
 
        res.sendStatus(200);
    })
})
 
mongoose.connect(
    'mongodb+srv://zsprint:<pwd>@cluster0.sad5j.mongodb.net/financialDashboard?retryWrites=true&w=majority',  { useNewUrlParser: true }
).then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error(err,'Database connection error')
  })
 
app.listen(3000)