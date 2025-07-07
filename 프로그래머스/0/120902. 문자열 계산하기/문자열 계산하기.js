const isOperator = (string) => Number.isNaN(Number(string))

const operatorMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
}

function solution(my_string) {
    const { answer } = my_string.split(" ").reduce((acc, cur) => {
        if (acc.answer === null) {
            acc.answer = Number(cur);
            return acc;
        }
        
        if (isOperator(cur)) {
            acc.operation = operatorMap[cur];
            return acc;
        }
        
        acc.answer = acc.operation(acc.answer, Number(cur));
        return acc;
    }, {
        operation: null,
        answer: null
    })
    
    return answer;
}

