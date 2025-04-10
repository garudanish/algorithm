const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const numbers = input.split(" ").map(Number);

console.log(numbers.sort((a, b) => a - b).join(" "));