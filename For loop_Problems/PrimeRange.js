const prompt = require('prompt-sync')();

let start = prompt("Enter the starting number of the range:");
let end = prompt("Enter the ending number of the range:");
let primeNumbers = [];

for (let i = start; i <= end; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    } 
  }
  if (isPrime && i > 1) {
    primeNumbers.push(i);
  }
}

console.log("The prime numbers between "+start+ ' and '  + end+ ' are: ' +primeNumbers);
