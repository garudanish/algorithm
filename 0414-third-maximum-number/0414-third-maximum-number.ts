function thirdMax(nums: number[]): number {
    const set = new Set(nums);
    const arr = Array.from(set).sort((a, b) => b - a);

    return arr[2] === undefined ? arr[0] : arr[2];
};