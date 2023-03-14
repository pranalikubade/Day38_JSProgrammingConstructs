const prompt=require("prompt-sync")();
const input = prompt("Enter a number: "); 

  let isPrime = true;

if (input< 2) {
  isPrime = false;
}

for (let i = 2; i < input; i++) {
  if (input % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(input+" is a prime number ");
} else {
  console.log(input+" is not a prime number ");
}
  