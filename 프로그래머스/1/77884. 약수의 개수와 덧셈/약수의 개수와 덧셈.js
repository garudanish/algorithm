const countDivisors = (number) => {
    const sqrted = Math.sqrt(number);
    let count = 1;
    
    for (let i = 2; i < sqrted; i += 1) {
        if(number % i === 0) {
            count += 1;
        }
    }
    
    return Math.floor(sqrted) === sqrted ? count * 2 + 1 : count * 2;
}

function solution(left, right) {
    let answer = 0;
    
    for (let n = left; n <= right; n += 1) {
        const divisorCount = countDivisors(n);
        
        if (divisorCount % 2 === 0) answer += n
        else answer -= n;
    }
    
    return answer;
}