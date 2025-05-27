function solution(arr) {
    let i = 0;
    const stk = [];
    
    while (i < arr.length) {
        if (arr.length > 0 && stk[stk.length - 1] === arr[i]) {
            stk.pop();
            i += 1;
            continue;
        }
        
        stk.push(arr[i]);
        i += 1;
    }
    
    const answer = stk.length === 0 ? [-1] : stk;
    
    return answer;
}