const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString()

const [A, B] = input.split(" ").map(Number);

console.log(A + B);