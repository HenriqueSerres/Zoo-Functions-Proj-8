const data = require('../data/zoo_data');

const totalAnimais = (animal) => data.species.find((spec) => spec.name === animal.specie);
// return totalAnimais[0].residents.length;
const verificaMale = (animal) => totalAnimais(animal).residents
  .filter((residente) => residente.sex === 'male').length;
const verificaFemale = (animal) => totalAnimais(animal).residents
  .filter((residente) => residente.sex === 'female').length;
const todosAnimais = data.species.reduce((accAnimal, specie) => {
  const qtanimal = accAnimal;
  qtanimal[specie.name] = specie.residents.length;
  return qtanimal;
}, {});
function countAnimals(animal) {
  if (!animal) {
    return todosAnimais;
  }
  if (animal.sex === undefined) {
    return todosAnimais[animal.specie];
  }
  if (animal.sex === 'male') {
    return verificaMale(animal);
  }
  if (animal.sex === 'female') {
    return verificaFemale(animal);
  }
}

console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
