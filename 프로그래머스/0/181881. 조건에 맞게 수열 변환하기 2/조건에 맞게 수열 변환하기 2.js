function solution(arr) {
    let previous = [];
    let current = arr;
    let count = 0;
    
    do {
        previous = current;
        current = current.map((num) => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            if (num < 50 && num % 2 === 1) return num * 2 + 1;
            return num
        })
        
        count += 1;
    } while (previous.some((num, i) => num !== current[i]))
    
    return count - 1;
}