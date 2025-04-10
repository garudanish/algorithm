const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = fs.readFileSync(filePath).toString().split("\n");
const dices = input.split(" ").map((item) => parseInt(item));

let highestNumber = 0;
let sameEyeNumber = 0;
const numberMap = {};
for (let i = 0; i < dices.length; i++) {
    numberMap[dices[i]] = numberMap[dices[i]] ? ++numberMap[dices[i]] : 1;
    if (highestNumber < dices[i]) {
        highestNumber = dices[i];
    }
}

const differentEyes = Object.entries(numberMap);
const eyesVariants = differentEyes.length;

if (eyesVariants < 3) {
    differentEyes.forEach(([key, value]) => {
        if (value > 1) {
            sameEyeNumber = key;
        }
    })    
}

if (eyesVariants === 3) {
   console.log(highestNumber * 100); 
} else if (eyesVariants === 2) {
    console.log(1000 + sameEyeNumber * 100);
} else {
    console.log(10000 + sameEyeNumber * 1000); 
}