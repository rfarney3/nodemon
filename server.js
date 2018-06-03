'use strict'
var Example = require('./models/examples.js')

//Import dependencies
var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Create an instance of express and of its router
var app = express();
var router = express.Router();

/*Set our port to either a predetermined port number if you have set
it up in your environment, or 3001 */
var port = process.env.API_PORT || 3001;

//Connect mongoose to your DB using the URI from mLab
mongoose.connect("mongodb://admin:admin@ds235840.mlab.com:35840/pracdaddy")

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

router.route("/sumpin")
.get((req, res) => {
  res.json({message: "A lil!"});
});

router.route("/guillotine")
.get((req,res) => {
    console.log("I will be executed!")
    res.json({message: "Sending response!"})
    console.log("I too shall be executed!")

  })


//POST Example
// var Animal = require('./models/animals');
//
// router.route("/animals")
// .get((req, res) => {
//     Animal.find((err, animals) => {
//         if (err) {
//           res.send(err)
//         } else {
//           res.json({ animals })
//         }
//       })
//   })
// .post((req, res) => {
//     let newAnimal = new Animal()
//
//     newAnimal.species = req.body.species
//     newAnimal.name = req.body.name
//     newAnimal.gender = req.body.gender
//     newAnimal.population = req.body.population
//     newAnimal.extinct = req.body.extinct
//
//     newAnimal.save((err) => {
//         if (err) {
//           res.send(err)
//         } else {
//           res.send({ newAnimal })
//         }
//       })
//   })
//
// router.route("/animals/:id")
// .get((req, res) => {
//     Animal.findById(req.params.id, (err, animal) => {
//         if (err) {
//           res.send(err)
//         } else {
//           res.json({ animal })
//         }
//       })
//   })
// .patch((req, res) => {
//     Animal.findById(req.params.id, (err, animalToEdit) => {
//         if (err) {
//           res.send(err)
//         } else {
//           animalToEdit.species = req.body.species
//           animalToEdit.name = req.body.name
//           animalToEdit.gender = req.body.gender
//           animalToEdit.population = req.body.population
//           animalToEdit.extinct = req.body.extinct
//
//           animalToEdit.save((err) => {
//             if (err) {
//               res.send(err)
//             } else {
//               res.json({ animalToEdit })
//             }
//           })
//         }
//       })
//   })
// .delete((req, res) => {
//     Animal.remove({_id: req.params.id}, (err) => {
//         if (err) {
//           res.send(err)
//         } else {
//           res.json({message: "Successful extermination!"})
//         }
//       })
//   })

//Configure Express to add '/api' in front of routes
app.use('/api', router);

//Start listening on specified port
app.listen(port, () => {
 console.log(`api running on port ${port}`);
});


//THIS WILL HOPEFULLY MAKE THE ENV ERROR GO AWAY
// require('dotenv').config()

// mongoose.connect(process.env.MONGO_URI)
//    .then(connection => {
//        console.log('Connected to MongoDB')
//    })
//    .catch(error => {
//      console.log(error.message)
//     })
