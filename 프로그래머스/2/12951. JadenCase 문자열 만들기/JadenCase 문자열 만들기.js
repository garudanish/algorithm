function solution(s) {
    const answer = s
    .split(" ")
    .map((str) => str.length ? `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}` : str)
    .join(" ");
    
    return answer;
}