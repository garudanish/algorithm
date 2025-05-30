const ineqMap = {
    '>': (n, m) => n > m,
    '<': (n, m) => n < m,
};

const eqMap = {
    '=': (ineqFunc) => (n, m) => ineqFunc(n, m) || n == m,
    '!': (ineqFunc) => (n, m) => ineqFunc(n,m)
}

function solution(ineq, eq, n, m) {
    const ineqFunc = ineqMap[ineq];
    const answer = eqMap[eq](ineqFunc)(n, m);
    
    return answer ? 1 : 0;
}