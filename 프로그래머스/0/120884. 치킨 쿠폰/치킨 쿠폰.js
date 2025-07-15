function solution(chicken) {
    let answer = 0;
    let couponCount = chicken;
    
    while (couponCount / 10 >= 1) {
        const serviceChickenCount = Math.floor(couponCount / 10);
        
        answer += serviceChickenCount;
        couponCount = couponCount % 10 + serviceChickenCount;
    }
    
    
    return answer;
}