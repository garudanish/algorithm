// r이 될 수 있는 가장 큰 수는 1000000 이고,
// 그것보다 작으면서 0과 5로만 이루어진 수는 555555 이다.
// 555555는 5 * 111111이고,
// 111111은 2진수로 63이다.

function solution(l, r) {
    const answer = new Array(63).fill(0).map((_, i)=> Number((i + 1).toString(2)) * 5).filter((number) => number >= l && number <= r);
    
    return answer.length ? answer : [-1];
}