function solution(arr) {
    const answer = [arr[0]];
    
    for (let i = 1; i < arr.length; i += 1) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}