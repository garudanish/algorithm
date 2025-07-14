function solution(s) {
    let answer = 0;
    let zeroCount = 0;
    
    let string = s;
    
    while (string !== "1") {
        answer += 1;
        
        const withoutZero = [...string].filter((char) => char !== "0").join("");
        
        console.log(withoutZero);
        
        zeroCount += string.length - withoutZero.length;
        string = Number(withoutZero.length).toString(2);
    }
    
    return [answer, zeroCount];
}