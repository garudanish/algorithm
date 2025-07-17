function solution(lines) {
    const map = lines.reduce((acc, [start, end]) => {
        for (let i = start; i < end; i += 1) {
            acc[i] = (acc[i] || 0) + 1;
        }
        
        return acc
    }, {})
    
    return Object.values(map).filter((count) => count > 1).length;
}