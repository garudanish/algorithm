function solution(t, p) {
    const numberList = [];
    
    for (let i = 0; i < t.length - p.length + 1; i += 1) {
        numberList.push(t.slice(i, i + p.length));
    }
    
    const answer = numberList.filter((num) => Number(num) <= Number(p)).length;
    
    return answer;
}