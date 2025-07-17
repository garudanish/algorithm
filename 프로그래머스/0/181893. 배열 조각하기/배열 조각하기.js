function solution(arr, query) {
    const answer = query.reduce((acc, target, index) => {
        if (index % 2 === 0) {
            return acc.slice(0, target + 1);
        }
        
        return acc.slice(target);
    }, arr);
    
    return answer;
}