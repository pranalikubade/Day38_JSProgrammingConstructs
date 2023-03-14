const a = 5
const b = 9
const c = 3

let result1 = a + b * c;
console.log(a + " + " + b + " * " + c + " = " + result1);

let result2 = a % b + c;
console.log(a + " % " + b + " + " + c + " = " + result2);

let result3 = c + a / b;
console.log(c + " + " + a + " / " + b + " = " + result3);

let result4 = a * b + c;
console.log(a + " * " + b + " + " + c + " = " + result4);

// To get maximum number.
if ((result1 > result2) && (result1 > result3) && (result1 > result4)) {
    console.log(result1 + " is the maximum result.");
} else if ((result2 > result1) && (result2 > result3) && (result2 > result4)) {
    console.log(result2 + " is the maximum result.");
} else if ((result3 > result1) && (result3 > result2) && (result3 > result4)) {
    console.log(result3 + " is the maximum result.");
} else console.log(result4 + " is the maximum result.");


// To get minimum number.
if ((result1 < result2) && (result1 < result3) && (result1 < result4)) {
    console.log(result1 + " is the minimum result.");
} else if ((result2 < result1) && (result2 < result3) && (result2 < result4)) {
    console.log(result2 + " is the minimum result.");
} else if ((result3 < result1) && (result3 < result2) && (result3 < result4)) {
    console.log(result3 + " is the minimum result.");
} else console.log(result4 + " is the minimum result.");