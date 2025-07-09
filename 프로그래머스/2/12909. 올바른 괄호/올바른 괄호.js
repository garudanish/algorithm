function solution(s){
    const isOpenBracket = (str) => str === "(";
    const stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
        if (isOpenBracket(s[i])) {
            stack.push(s[i]);
            continue;
        }
        
        const lastBracket = stack.pop();
        if (!isOpenBracket(lastBracket)) {
            return false;
        }
    }

    return stack.length === 0;
}