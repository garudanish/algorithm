const toCountMap = (arr) => arr.reduce((acc, cur) => {
        if (!acc.has(cur)) {
            acc.set(cur, 0);
        }

        acc.set(cur, acc.get(cur) + 1);
        return acc
    }, new Map());

function solution(spell, dic) {
    const dicMap = dic.map((word) => toCountMap([...word]));
    
    const spellCounts = Array.from(toCountMap(spell).entries());
    
    const answer = dicMap.some((counts) => spellCounts.every(([alphabet, count]) => counts.get(alphabet) === count)) ? 1 : 2;
    
    return answer;
}