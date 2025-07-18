function solution(sizes) {
    const sorted = sizes.map(([x, y]) => x > y ? [x, y] : [y, x]);
    
    const [x, y] = sorted.reduce(([accX, accY], [x, y]) => [
        accX > x ? accX : x, accY > y ? accY : y
    ], [0, 0])
    
    return x * y;
}