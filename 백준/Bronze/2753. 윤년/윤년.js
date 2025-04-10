const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const year = Number(input);

const isLeapYear = (year) => year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);

console.log(isLeapYear(year) ? 1 : 0);