const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((gerentes) => gerentes.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const gerId = data.employees.filter((gerente) => gerente.managers.includes(managerId));
    return gerId.map((el) => `${el.firstName} ${el.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
