//Route handlers definition
var express = require('express');
var Router = express.Router();

//GET route handler
Router.get('/dev', function (req, res) {
  res.send({ type: 'GET' });
});

//POST route handler
Router.post('/dev', function (req, res) {
  res.send({ type: 'POST' });
});

//PUT route handler
Router.put('/dev/:id', function (req, res) {
  res.send({ type: 'PUT' });
});

//DELETE route handler
Router.delete('/dev/:id', function (req, res) {
  res.send({ type: 'DELETE' });
});

module.exports = Router;