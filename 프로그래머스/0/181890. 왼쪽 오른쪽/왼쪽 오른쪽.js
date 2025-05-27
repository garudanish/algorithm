function solution(str_list) {
    const indexMap = str_list.reduce((acc, cur, i) => {
        if (acc[cur] !== undefined) {
            return acc;
        }
        
        return {...acc, [cur]: i};
    }, {})
    
    const lIndex = indexMap.l;
    const rIndex = indexMap.r;
    
    if (lIndex === undefined && rIndex === undefined) return [];
    if (lIndex < rIndex || rIndex === undefined) return str_list.slice(0, lIndex);
    return str_list.slice(rIndex + 1)
}