function solution(arr) {
    const rowLength = arr.length;
    const colLength = arr[0].length;
    
    let answer = arr;
    
    if (rowLength > colLength) {
        answer = arr.map((list) => [...list, ...new Array(rowLength - colLength).fill(0)])
    } else if (colLength > rowLength) {
        answer = [...arr, ...new Array(colLength - rowLength).fill(new Array(colLength).fill(0))];
    }
    
    return answer;
}