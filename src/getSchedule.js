const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const dataHora = {};
const animDias = data.species.map((especie) => especie.name);
console.log(animDias);

function sentenceBuild(dayName) {
  const { open, close } = hours[dayName];
  return `Open from ${open}am until ${close}pm`;
}

function getAnimalByDay(dayName) {
  const beastDays = data.species.filter(({ availability }) => availability.includes(dayName))
    .map(({ name }) => name);
  if (beastDays.length) {
    return beastDays;
  }
}

function schedule() {
  Object.keys(hours).forEach((days) => {
    if (days === 'Monday') {
      dataHora[days] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    if (days !== 'Monday') {
      dataHora[days] = {
        officeHour: sentenceBuild(days),
        exhibition: getAnimalByDay(days),
      };
    }
  });
}

function getSchedule(scheduleTarget) {
  schedule();
  getAnimalByDay();
  if (scheduleTarget === undefined) {
    return dataHora;
  }
  if (Object.keys(dataHora).includes(scheduleTarget)) {
    return { [scheduleTarget]: dataHora[scheduleTarget] };
  }
  if (animDias.includes(scheduleTarget)) {
    return species.find((especie) => especie.name === scheduleTarget).availability;
  }
  return dataHora;
}

module.exports = getSchedule;
