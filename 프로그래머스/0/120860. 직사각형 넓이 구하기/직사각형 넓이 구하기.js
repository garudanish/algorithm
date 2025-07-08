function solution(dots) {
    const xCoords = dots.map(([x]) => x);
    const yCoords = dots.map(([_, y]) => y);
    
    const minX = Math.min(...xCoords);
    const maxX = Math.max(...xCoords);
    
    const minY = Math.min(...yCoords);
    const maxY = Math.max(...yCoords);
    
    const xLength = Math.abs(maxX - minX);
    const yLength = Math.abs(maxY - minY);
    
    const answer = xLength * yLength;
    
    return answer;
}