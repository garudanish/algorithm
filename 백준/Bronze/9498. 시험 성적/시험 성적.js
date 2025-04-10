const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const score = Number(input);

const calculateGrade = (score) => {
    if (score > 89) {
        return "A";
    } else if (score > 79) {
        return "B";
    } else if (score > 69) {
        return "C";
    } else if (score > 59) {
        return "D";
    }
    
    return "F";
}

console.log(calculateGrade(score));