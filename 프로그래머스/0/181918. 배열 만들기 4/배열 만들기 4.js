function solution(arr) {
    let i = 0;
    
    const stk = [];
    
    while (i < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[i]);
            i += 1;
            continue;
        }
        
        if (stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i += 1;
            continue;
        }
        
        stk.pop();
    }
    
    return stk;
}