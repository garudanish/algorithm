function solution(board) {
    const answer = board.flatMap((row, i) => row.map((cell, j) => {
        const possiblyDanger = [
            board[i - 1]?.[j - 1],
            board[i - 1]?.[j],
            board[i - 1]?.[j + 1],
            row[j - 1],
            cell,
            row[j + 1],
            board[i + 1]?.[j - 1],
            board[i + 1]?.[j],
            board[i + 1]?.[j + 1],
        ]
                
        return possiblyDanger.some((value) => value === 1) ? 0 : 1
    })).reduce((acc, cur) => acc + cur, 0)
    
    return answer;
}