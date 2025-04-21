function solution(arr) {
    const indices = arr.map((num, i) => num === 2 ? i : null).filter((index) => index !== null);
    
    if (indices.length === 0) {
        return [-1]
    }
    
    const answer = arr.slice(indices[0], indices[indices.length - 1] + 1);

    return answer;
}