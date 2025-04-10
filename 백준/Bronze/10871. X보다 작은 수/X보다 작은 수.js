const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [, X] = input[0].split(" ");

const numberedX = Number(X);

const numbers = input[1].split(" ").map(Number);

const answer = numbers.filter((number) => number < numberedX).join(" ");

console.log(answer);