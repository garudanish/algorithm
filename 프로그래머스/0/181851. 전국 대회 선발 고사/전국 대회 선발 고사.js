function solution(rank, attendance) {
    const [a, b, c] = rank
    .map((r, i) => ({
        rank: r,
        index: i,
        attendance: attendance[i]
    }))
    .filter(({ attendance }) => attendance)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
    .map(({ index }) => index);
    
    const answer = 10000 * a + 100 * b + c;
    
    return answer;
}