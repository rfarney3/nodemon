'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var AnimalsSchema = new Schema({
   species: String,
   name: String,
   gender: String,
   population: Number,
   extinct: Boolean
  });

module.exports = mongoose.model('Animal', AnimalsSchema);
