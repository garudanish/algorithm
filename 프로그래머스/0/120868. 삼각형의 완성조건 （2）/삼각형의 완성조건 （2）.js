function solution(sides) {
    const answer = new Set();
    
    // 주어진 변 중 가장 긴 게 있을 때
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    for (let i = 1; i <= max; i += 1) {
        if (min + i > max) answer.add(i);
    }
    
    // 구해야 하는 변이 가장 긴 변일 때
    for (let i = max + 1; i < min + max; i += 1) {
        answer.add(i);
    }
    
    return answer.size;
}