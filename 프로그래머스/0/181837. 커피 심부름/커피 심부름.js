function solution(order) {
    const priceMap = {
        iceamericano: 4500,
        americanoice: 4500,
        hotamericano: 4500,
        americanohot: 4500,
        americano: 4500,
        anything: 4500, // 차가운 아메리카노
        icecafelatte: 5000,
        cafelatteice: 5000,
        hotcafelatte: 5000,
        cafelattehot: 5000,
        cafelatte: 5000,
    }
    
    const answer = order.reduce((acc, menu) => acc + priceMap[menu], 0);
    return answer;
}