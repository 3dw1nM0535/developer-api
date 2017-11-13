//Route handlers definition
var express = require('express');
var Router = express.Router();
var Dev = require('../models/devSchema');

//GET route handler
Router.get('/dev', function (req, res) {
  res.send({ type: 'GET' });
});

//POST route handler
Router.post('/dev', function (req, res, next) {

  Dev.create(req.body).then(function (dev) {
    res.send(dev);
  }).catch(next);

});

//PUT route handler
Router.put('/dev/:id', function (req, res) {
  
  Dev.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Dev.findOne({ _id: req.params.id }).then(function (dev) {
      res.send(dev);
    });
  });

});

//DELETE route handler
Router.delete('/dev/:id', function (req, res) {
  
  Dev.findByIdAndRemove({ _id: req.params.id }).then(function (dev) {
    res.send(dev);
  });

});

module.exports = Router;