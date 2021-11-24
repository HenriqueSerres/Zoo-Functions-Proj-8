const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalFiltrado = species.filter((animais) => animais.name === animal);
  console.log(animalFiltrado);
  const ageAnimal = animalFiltrado[0].residents.every((el) => el.age >= age);
  return ageAnimal;
}
console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
