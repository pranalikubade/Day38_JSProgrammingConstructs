const prompt = require('prompt-sync')();
let num = prompt("Enter a number to compute its factors:");
let factors = [];

for (let i = 2; i * i <= num; i++) {
  while (num % i === 0) {
    factors.push(i);
    num /= i;
  }
}

if (num > 1) {
  factors.push(num);
}

console.log('The prime factors of ' + num + ' are: ' +factors);
