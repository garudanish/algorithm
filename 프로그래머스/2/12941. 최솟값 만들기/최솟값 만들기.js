function solution(A,B){
    const sortedA = A.slice().sort((a, b) => a - b);
    const sortedB = B.slice().sort((a, b) => b - a);
    
    const answer = sortedA.reduce((acc, cur, i) => acc + cur * sortedB[i], 0);

    return answer;
}