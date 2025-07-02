function solution(s) {
    const operands = s.split(" ");
    
    const answer = operands.reduce((acc, cur, i) => {
        if (cur === "Z") return acc - operands[i - 1];
        return acc + Number(cur)
    }, 0);
    
    return answer;
}