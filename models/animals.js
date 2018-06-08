'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var AnimalsSchema = new Schema({
   species: String
  });

module.exports = mongoose.model('Animal', AnimalsSchema);
