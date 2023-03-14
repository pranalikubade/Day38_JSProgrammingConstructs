// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the day and month (separated by a space): ', (input) => {
//   let [day, month] = input.split(' ').map(Number);

//   // Check if the day is between March 20 and June 20
//   if (month === 3 && day >= 20) {
//     console.log(true);
//   } else if (month === 4 || month === 5) {
//     console.log(true);
//   } else if (month === 6 && day <= 20) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

//   rl.close();
// });


const month = process.argv[5]; // take the month as command line argument
const day = process.argv[22]; // take the day as command line argument
if (month === 3 && day >= 20) {
      console.log(true);
    } else if (month === 4 || month === 5) {
      console.log(true);
    } else if (month === 6 && day <= 20) {
      console.log(true);
    } else {
      console.log(false);
    }



// const month = prompt("Enter the month (in number format): ");
// const day = prompt("Enter the day: ");
// if (( month === "3" && ( day >= 20 && day <= 31 ) )){
//   console.log('true');
// }
// if (( month === "4" && ( day > 0 && day <= 30 ) )){
//   console.log('true');
// }
// if (( month === "5" && ( day > 0 && day <= 31 ) )){
//   console.log('true');
// }
// if (( month === "6" && ( day > 0 && day <= 20 ) )){
//   console.log('true');
// }
// else {
//   console.log('false');
// }


