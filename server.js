'use strict'

//Import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Create an instance of express and of its router
var app = express();
var router = express.Router();

/*Set our port to either a predetermined port number if you have set
it up in your environment, or 3001 */
var port = process.env.API_PORT || 3001;

//Connect mongoose to your DB using the URI from mLab
mongoose.connect(/*Insert DB URI from DB setup above*/)

/*Configure Express to use body-parser to parse request bodies in JSON. */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS configuration

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


//Add a route!
router.route('/')
.get((req, res) => {
  res.json({message: "Initialized!"});
});


//Configure Express to add '/api' in front of routes
app.use('/api', router);

//Start listening on specified port
app.listen(port, () => {
 console.log(`api running on port ${port}`);
});
