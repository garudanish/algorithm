function solution(score) {
    const averageMap = score
        .map(([english, math], index) => ({ average: (english + math) / 2, index }))
        .reduce((map, { average, index }) => {
            if (!map.get(average)) {
                map.set(average, []);
            }
            
            return map.set(average, [...map.get(average), index]);
        }, new Map())
    
    const gradeMap = Array.from(averageMap.entries())
        .sort((a, b) => b[0] - a[0])
        .reduce((map, [, students], index) => {
            const count = map.get('count') || 0;
            
            students.forEach((student) => {
                map.set(student, count + 1);
            })
            
            return map.set('count', count + students.length);
        }, new Map())
    
    return score.map((_, i) => gradeMap.get(i));
}