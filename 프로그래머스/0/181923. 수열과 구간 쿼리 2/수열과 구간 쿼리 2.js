function solution(arr, queries) {
    const answer = queries.reduce((acc, [s, e, k]) => {
        const sliced = arr.slice(s, e + 1);
        const min = Math.min(...sliced.filter((num) => num > k));
        
        return min === Infinity ? [...acc, -1] : [...acc, min];
    }, [])
    
    return answer;
}