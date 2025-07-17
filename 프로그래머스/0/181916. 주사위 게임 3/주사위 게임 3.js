function solution(a, b, c, d) {
    const countMap = [a, b, c, d].reduce((acc, cur) => ({...acc, [cur]: (acc[cur] || 0) + 1}), {});
    
    const maxCount = Math.max(...Object.values(countMap));
    
    if (maxCount === 4) {
        return 1111 * a;
    }
    
    if (maxCount === 1) {
        return Math.min(a, b, c, d);
    }
    
    if (maxCount === 3) {
        const [p, q] = Object.entries(countMap).sort((a, b) => b[1] - a[1]).map(([number]) => Number(number));
        return (10 * p + q) ** 2;
    }
    
    const keys = Object.keys(countMap);
    
    if (keys.length === 2) {
        const [p, q] = keys.map((number) => Number(number));
        return (p + q) * Math.abs(p - q);
    }
    
    const [_, q, r] = Object.entries(countMap).sort((a, b) => b[1] - a[1]).map(([number]) => Number(number));
    
    return q * r;
}