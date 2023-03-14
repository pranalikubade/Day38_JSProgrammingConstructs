const coinFlip =Math.floor( Math.random() * 2); 

if (coinFlip == 0) {
  console.log('Heads');
} else {
  console.log('Tails');
}

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Enter a  number ', number => {
//     console.log("Number is "  +number);
//     readline.close();
// });