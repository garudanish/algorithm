const isEven = (num) => num % 2 === 0;

const toOne = (num) => {
    let count = 0;
    let cur = num;

    while (cur !== 1) {
        if (isEven(cur)) {
            cur = cur / 2;
        } else {
            cur = (cur - 1) / 2;
        }
        
        count += 1;
    }
    
    return count;
}

function solution(num_list) {
    const answer = num_list.map(toOne).reduce((acc, cur) => acc + cur, 0);
    return answer;
}