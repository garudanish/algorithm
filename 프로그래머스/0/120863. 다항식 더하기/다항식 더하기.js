function solution(polynomial) {
    const [xCount, number] = polynomial.split(" + ").reduce((acc, cur) => {
        if (cur.slice(-1) == "x") {
            return [acc[0] + (Number(cur.slice(0, -1)) || 1), acc[1]]
        }
        
        return [acc[0], acc[1] + Number(cur)]
    }, [0, 0])
    
    const xText = xCount > 0 ? `${xCount > 1 ? xCount : ''}x` : ''
    
    const answer = [xText, number].filter(Boolean).join(' + ');
          
    return answer
}