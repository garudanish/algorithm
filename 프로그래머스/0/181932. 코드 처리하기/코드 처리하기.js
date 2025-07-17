function solution(code) {
    const functionMap = {
        0: (value, idx, ret) => {
            if (idx % 2 === 1) return ret;
            return `${ret}${value}`
        },
        1: (value, idx, ret) => {
            if (idx % 2 === 0) return ret;
            return `${ret}${value}`
        },
    };
    
    const { answer } = [...code].reduce((acc, cur, i) => {
        if (cur === "1") {
            return { ...acc, mode: acc.mode === 0 ? 1 : 0 };
        }
        
        return {
            ...acc,
            answer: functionMap[acc.mode](cur, i , acc.answer)
        };
    }, {
        answer: '',
        mode: 0
    })
    
    return answer || "EMPTY";
}