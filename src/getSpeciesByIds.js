const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((especies) => ids.includes(especies.id));
}

module.exports = getSpeciesByIds;
