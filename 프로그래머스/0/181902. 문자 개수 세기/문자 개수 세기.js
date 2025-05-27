function solution(my_string) {
    const alphabetMap = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"].reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {})
    
    const countObj = [...my_string].reduce((acc, cur) => ({...acc, [cur]: acc[cur] + 1 }), alphabetMap);
    
    return Object.values(countObj);
}