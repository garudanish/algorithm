function solution(numlist, n) {
    const answer = numlist.slice().sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);
    return answer;
}