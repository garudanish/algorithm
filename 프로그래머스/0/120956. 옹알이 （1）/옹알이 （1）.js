function solution(babbling) {
    const answer = babbling.map((word) => word.replace(/aya|ye|woo|ma/g, '')).filter((word) => word.length === 0).length;
    return answer;
}