function solution(myStr) {
  const answer = myStr
    .split('a')
    .flatMap((list) => list.split('b'))
    .flatMap((list) => list.split('c'))
    .filter((str) => str);
  return answer.length === 0 ? ['EMPTY'] : answer;
}
