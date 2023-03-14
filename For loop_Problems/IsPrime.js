
// const input = parseInt(process.argv[2]);

// let isPrime = true;

// if (input < 2) {
//   isPrime = false;
// }

// for (let i = 2; i < input; i++) {
//   if (input % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log(input+" is a prime number ");
// } else {
//   console.log(input+" is not a prime number ");
// }


// const prompt = require('prompt-sync')();

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const start = parseInt(prompt('Enter the starting number: '));
// const end = parseInt(prompt('Enter the ending number: '));

// console.log(`Prime numbers between ${start} and ${end}:`);

// for (let i = start; i <= end; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a number: ",number => {
  let isPrime = true;

if (number< 2) {
  isPrime = false;
}

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(input+" is a prime number ");
} else {
  console.log(input+" is not a prime number ");
}
  r1.close();
});
