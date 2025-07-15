function solution(n, m) {
    let leastCommonMultiple = n * m;
    let greatestCommonDivisor = 1;
    
    for (let i = 1; i <= n * m; i += 1) {
        if (n % i === 0 && m % i === 0) {
            greatestCommonDivisor = i;
        }
        
        if (i % n === 0 && i % m === 0) {
            leastCommonMultiple = leastCommonMultiple > i ? i : leastCommonMultiple;
        }
    }
    
    return [greatestCommonDivisor, leastCommonMultiple];
}