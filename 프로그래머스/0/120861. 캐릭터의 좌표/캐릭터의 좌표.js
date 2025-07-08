const movementFunction = (board) => (input) => {
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    const map = {
        up: ([x, y]) => [x, Math.min(y + 1, maxY)],
        down: ([x, y]) => [x, Math.max(y - 1, maxY * -1)],
        left: ([x, y]) => [Math.max(x - 1, maxX * -1), y],
        right: ([x, y]) => [Math.min(x + 1, maxX), y],
    }
    
    return map[input];
}

function solution(keyinput, board) {
    const answer = keyinput.reduce((coord, input) => movementFunction(board)(input)(coord), [0, 0])
    return answer;
}