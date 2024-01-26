require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;





mongoose.connect((process.env.MONGO_URI), { useNewUrlParser: true, useUnifiedTopology: true });
const personSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true // This makes the name field required
  },
  age: Number,
  favoriteFoods: {
    type: [String], // This defines an array of strings
    default: []     // Sets the default value for favoriteFoods to an empty array
  }
});
const Person = mongoose.model('Person', personSchema);



const createAndSavePerson = (done) => {
  const personInstance = new Person({
    name: 'Alejandro', 
    age: 30,         
    favoriteFoods: ['potaje de lentejas', 'pasta'] 
  });

  // Save the document instance to the database
  personInstance.save(function(err, data) {
    if (err) {
      done(err, null);
    } else {
      done(null, data);
    }
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
