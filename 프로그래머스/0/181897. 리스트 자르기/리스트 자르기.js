function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    const functionMap = {
        1: (list) => list.slice(0, b + 1),
        2: (list) => list.slice(a),
        3: (list) => list.slice(a, b + 1),
        4: (list) => {
            const res = []
            for (let i = a; i <= b; i += c) {
                res.push(list[i])
            }
            return res
        }
    }
    
    return functionMap[n](num_list);
}