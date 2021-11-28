const data = require('../data/zoo_data');

const entrantes = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const publi = (acc, publico) => {
  if (publico.age >= 18 && publico.age < 50) {
    acc.adult += 1;
  }
  if (publico.age >= 50) {
    acc.senior += 1;
  }
  if (publico.age < 18) {
    acc.child += 1;
  }
};
function countEntrants(entrants) {
  return entrants.reduce((acc, publico) => {
    publi(acc, publico);
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}
console.log(countEntrants(entrantes));

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalChild = (countEntrants(entrants).child) * (data.prices.child);
  const totalAdult = (countEntrants(entrants).adult) * (data.prices.adult);
  const totalSenior = (countEntrants(entrants).senior) * (data.prices.senior);
  const totalEntries = totalChild + totalAdult + totalSenior;
  return totalEntries;
}

module.exports = { calculateEntry, countEntrants };
