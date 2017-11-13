var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//instantiate express app
var app = express();


//connect to mongodb
mongoose.connect('mongodb://localhost/developers', { useMongoClient: true });

//mongoose promise Middleware
mongoose.Promise = global.Promise;

//Body-parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes Middleware
app.use('/api', require('./Routes/api'));

//Port number def
var port = 1234 || process.env.PORT;

//listen for request on port 1234
app.listen(port, function () {
  console.log('Listening for requests!');
});