function solution(n) {
    let answer = 0;
    let count = 0;
    
    for (let i = 1; i <= n; i += 1) {
        count += 1;
        while (count % 3 === 0 || count.toString().split("").filter((char) => char === "3").length > 0) {
            count += 1;
        }
    }
    
    return count;
}