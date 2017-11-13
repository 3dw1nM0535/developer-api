var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Geolocation Schema
var geoSchema = new Schema ({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

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
  geometry: geoSchema

});

var Dev = mongoose.model('dev', devSchema);

module.exports = Dev;
