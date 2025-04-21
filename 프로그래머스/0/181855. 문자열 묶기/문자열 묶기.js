function solution(strArr) {
    const lengthMap = strArr.reduce((acc, cur) => acc.set(cur.length, (acc.get(cur.length) || 0) + 1), new Map());
    
    const [answer] = Array.from(lengthMap.values()).sort((a, b) => b - a);
    
    return answer;
}