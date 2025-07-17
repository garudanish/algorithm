function solution(A, B) {
    let string = A;
    
    for (let i = 0; i <= A.length; i += 1) {
        if (string === B) return i;
        
        string = `${string.slice(-1)}${string.slice(0, -1)}`;
    }
    
    return -1;
}