function solution(n, arr1, arr2) {
  return arr1
    .reduce((acc, cur, i) => [...acc, cur | arr2[i]], [])
    .map((num) => {
      const inBinary = num.toString(2).padStart(n, 0);
      return [...inBinary].reduce(
        (acc, char) => acc + (char === "1" ? "#" : " "),
        "",
      );
    });
}