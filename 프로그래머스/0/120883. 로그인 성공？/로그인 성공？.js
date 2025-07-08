function solution(id_pw, db) {
    const [givenId, givenPw] = id_pw;
    
    const dbMap = db.reduce((acc, [id, pw]) => acc.set(id, pw), new Map());
    
    if (!dbMap.has(givenId)) return 'fail';
    if (dbMap.get(givenId) !== givenPw) return 'wrong pw'
    
    return 'login';
}