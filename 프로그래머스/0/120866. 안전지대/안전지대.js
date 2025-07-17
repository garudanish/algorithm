function solution(board) {
    const cellCount = board[0].length ** 2;
    
    const dangerousCellCount = board.flatMap((row, i) => row.map((cell, j) => {
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
                
        return possiblyDanger.some((value) => value === 1) ? 1 : 0
    })).reduce((acc, cur) => acc + cur, 0)
    
    return cellCount - dangerousCellCount;
}