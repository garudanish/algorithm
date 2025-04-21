function solution(arr, queries) {
    const answer = queries.reduce((acc, [i, j]) => {
        const iItem = acc[i];
        const jItem = acc[j];
        
        acc[i] = jItem;
        acc[j] = iItem;
        
        return acc;
    }, arr);
    
    return answer;
}