function solution(num, total) {
    if (num % 2 == 1) {
        const answer = new Array(num)
            .fill(Math.floor(total / num) - Math.floor(num / 2))
            .map((num, i) => num + i);
        
        return answer;
    }
    
    
    
    const answer = new Array(num)
            .fill(Math.ceil(total / num) - Math.floor(num / 2))
            .map((num, i) => num + i);
        
        return answer;
}