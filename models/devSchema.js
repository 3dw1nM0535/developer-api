var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//dev data Schema
var devSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Name field is required!']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },

});

var Dev = mongoose.model('dev', devSchema);

module.exports = Dev;
