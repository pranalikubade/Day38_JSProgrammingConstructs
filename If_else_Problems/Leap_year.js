const prompt = require("prompt-sync")();
const year = prompt("Enter the day: ");

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(year + ' is a leap year');
} else {
  console.log(year + ' is not a leap year');
}