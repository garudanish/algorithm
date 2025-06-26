function solution(n, t, m, p) {
    const numbers = [];
    let currentNumber = 0;
    
    while (numbers.length < t * m) {
        numbers.push(...currentNumber.toString(n).toUpperCase().split(""));
        currentNumber += 1;
    }
    
    return numbers.filter((_, i) => i % m === p - 1).slice(0, t).join("");
}