const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) return false;
    }
    
    return true;
}

const getPrimeNumbersUntil = (n) => {
    const primeNumbers = [];
    
    for (let i = 2; i <= n; i += 1) {
        if (isPrime(i)) primeNumbers.push(i)
    }
    
    return primeNumbers;
}

function solution(n) {
    const primeNumbers = getPrimeNumbersUntil(n);
    
    const answer = primeNumbers.filter((num) => n % num === 0);
    
    return answer;
}