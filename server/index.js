const express = require('express')
const router = express.Router();
const twitter = require('./routes/twitter')
const mongoose = require('mongoose');
mongoose.connect('mongodb://cuckoo:cuckoo@ds143030.mlab.com:43030/cuckoo');

const app = express()

app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/twitter', twitter);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
