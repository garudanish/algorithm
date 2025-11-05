function findMissingElements(nums: number[]): number[] {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const set = new Set(nums);

    const ret = [];

    for (let i = min + 1; i < max; i += 1) {
        if (set.has(i)) continue;
        ret.push(i);
    }

    return ret;
};