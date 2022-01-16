let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 18;
if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000
}
console.log('Participant' + ' ' + raceNumber)
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Participant ${raceNumber},you will race at 9:30.`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Participant ${raceNumber},you will race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Participant ${raceNumber},you will race at 12:30 pm`);
} else {
  console.log('Please register at the front desk')
};