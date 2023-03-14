const prompt = require("prompt-sync")();
const month = prompt("Enter the month (in number format): ");
const day = prompt("Enter the day: ");
if (( month == 3 && ( day >= 20 && day <= 31 ) )){
  console.log(true);
}
else if (( month == 4 && ( day > 0 && day <= 30 ) )){
  console.log(true);
}
else if (( month == 5 && ( day > 0 && day <= 31 ) )){
  console.log(true);
}
else if (( month == 6 && ( day > 0 && day <= 20 ) )){
  console.log(true);
}
else {
  console.log(false);
}


