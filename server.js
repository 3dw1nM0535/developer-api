var express = require('express');

//instantiate express app
var app = express();

//Routes Middleware
app.use('/api', require('./Routes/api'));

//Port number def
var port = 1234 || process.env.PORT;

//listen for request on port 1234
app.listen(port, function () {
  console.log('Listening for requests!');
});