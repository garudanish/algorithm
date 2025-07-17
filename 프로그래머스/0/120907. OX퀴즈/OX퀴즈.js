const operatorMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
}

function solution(quiz) {
    const answer = quiz.map((expression) => {
        const [num1, operator, num2, _, value] = expression.split(" ");
        
        return operatorMap[operator](Number(num1), Number(num2)) === Number(value) ? "O" : "X";
    })
    
    return answer;
}