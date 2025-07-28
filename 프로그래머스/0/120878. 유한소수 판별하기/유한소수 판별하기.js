const calculateGreatestCommonDivisor = (num1, num2) => {
    let divisor = 1;
    
    for (let i = 2; i <= Math.max(num1, num2); i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i;
        }
    }
    
    return divisor;
}

const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }
    
    return true;
}

const calculatePrimeFactors = (num) => {
    const numbers = new Array(num - 1).fill(0).map((_, i) => i + 2);
    
    const primeFactors = numbers.filter((number) => num % number === 0 && isPrime(number));
    
    return primeFactors;
}

function solution(a, b) {
    const greatestCommonDivisor = calculateGreatestCommonDivisor(a, b);
    
    const primeFactors = calculatePrimeFactors(b / greatestCommonDivisor);
    
    return primeFactors.every((primeFactor) => primeFactor === 2 || primeFactor === 5) ? 1 : 2;
}