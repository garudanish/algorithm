const get1Count = (num) => num.toString(2).split("").filter((char) => char === "1").length;

function solution(n) {
    const oneCount = get1Count(n);
    
    let answer = n + 1;
    
    while (get1Count(answer) !== oneCount) {
        answer += 1;
    }
        
    return answer;
}