function solution(s) {
    const indexMap = {};
    
    const answer = [...s].map((char, i) => {
        if (indexMap[char] === undefined) {
            indexMap[char] = i;
            return -1;
        }
        
        const existingIndex = indexMap[char];
        
        indexMap[char] = i;
        return i - existingIndex;
    })
    
    return answer;
}