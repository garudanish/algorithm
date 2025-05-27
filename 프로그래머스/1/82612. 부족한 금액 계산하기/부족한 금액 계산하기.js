function solution(price, money, count) {
    const totalPrice = new Array(count).fill(price).reduce((acc, cur, i) => acc + cur * (i + 1), 0);
    
    const shortAmount = totalPrice - money

    return shortAmount < 0 ? 0 : totalPrice - money;
}