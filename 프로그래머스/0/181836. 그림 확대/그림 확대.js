function solution(picture, k) {
    const answer = picture.reduce((acc, cur) => {
        let string = '';
        for (let i = 0; i < cur.length; i += 1) {
            string += cur[i].repeat(k);
        }
        
        return [...acc, ...new Array(k).fill(string)];
    }, []);
    
    return answer;
}