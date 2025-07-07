function solution(arr, k) {
    const set = new Set(arr);
    
    const answer = [...Array.from(set).slice(0, k), ...new Array(Math.max(k - set.size, 0)).fill(-1)];
    
    return answer;
}