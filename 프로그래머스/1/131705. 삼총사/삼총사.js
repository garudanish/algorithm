const generateCombinations = (list, k, items = [], idx = 0, result = []) => {
  if (items.length === k) {
    result.push(items);
    return;
  }

  for (let i = idx; i < list.length; i += 1) {
    generateCombinations(list, k, [...items, list[i]], i + 1, result);
  }

  return result;
};

function solution(number) {
    const combinations = generateCombinations(number, 3);
    const canBeZero = combinations.filter((arr) => arr.reduce((acc, cur) => acc + cur, 0) === 0);
    return canBeZero.length;
}