function solution(food) {
    const foodCount = food.slice(1).reduce((acc, count) => acc + Math.floor(count / 2), 0);
    
    const foodList = new Array(foodCount)
    
    let index = 0;
    
    for (let i = 1; i < food.length; i += 1) {
        const fillCount = Math.floor(food[i] / 2);
        
        for (let j = index; j < index + fillCount; j += 1) {
            foodList[j] = i;
        }
        
        index = index + fillCount;
    }
    
    const answer = [...foodList, 0, ...foodList.reverse()].join("");
    
    return answer;
}