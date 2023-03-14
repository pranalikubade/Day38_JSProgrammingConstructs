
let values = [];
for (let i = 0; i < 5; i++) {
  values.push(Math.floor(Math.random() * 900) + 100);
}

let min = values[0];
let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
  if (values[i] > max) {
    max = values[i];
  }
}

console.log("3 Digit Random numbers are: " + values);
console.log("The minimum value is: " + min);
console.log("The maximum value is: " + max);