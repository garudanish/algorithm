function solution(d, budget) {
    const sorted = d.slice().sort((a, b) => a - b);
    
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < d.length; i += 1) {
        sum += sorted[i];
        
        if (budget - sum < 0) {
            return answer;
        }
        
        answer += 1;
    }
    
    return answer;
}