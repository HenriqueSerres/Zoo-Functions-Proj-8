const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcId = data.employees.find((el) => el.id === id);
  const firstAnim = funcId.responsibleFor.find((first) => first[0]);
  const olderAnim = data.species.find((especie) => especie.id === firstAnim).residents
    .sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = olderAnim;
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
