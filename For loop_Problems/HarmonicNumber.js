const n = process.argv[2];
let harmonic = 0;

for (let i = 1; i <= n; i++) {
  harmonic += 1 / i;
}

console.log("The " +n+ "th harmonic number is " +harmonic);
