function majorityElement(nums: number[]): number {
    const map = nums.reduce((map, num) => {
        if (!map.has(num)) {
            map.set(num, 0);
        }

        map.set(num, map.get(num) + 1);
        return map;
    }, new Map());

    return Array.from(map).sort((a, b) => b[1] - a[1])[0][0];
};