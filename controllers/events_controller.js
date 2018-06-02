const Event = require('./models/animals')

module.exports = {

  showEvents: (req, res) => {
    res.render('/animals', { animals: animals });
  },

  showSingle: (req, res) => {

  },

  seedEvents: (req, res) => {
    const events = [
      { species: "Spider", name: "Daddy", gender: "Trans", population: 5, extinct: false },
      { species: "Patrick", name: "Salt", gender: "Other", population: 1, extinct: true },
      { species: "Bitch", name: "Shannon", gender: "Neutral", population: 6, extinct: false },
      { species: "Dank", name: "Danker", gender: "Dankiest", population: 2, extinct: true },
    ];

    for (event of events) {
      var newEvent = new Event(event);
      newEvent.save();
    }

    res.send("Database seeded")
  }

}

// var AnimalsSchema = new Schema({
//  species: String,
//  name: String,
//  gender: String,
//  population: Number,
//  extinct: Boolean
// });
