'use strict'

//Import dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a schema

var ExampleSchema = new Schema({
 string_prop: String,
 number_prop: Number,
 boolean_prop: Boolean
});


//Export
module.exports = mongoose.model('Example', ExampleSchema);
