function solution(arr, queries) {
    return queries.reduce((acc, [s, e, k]) => acc.map((n, i) => {
        if (!(s <= i && i <= e)) return n; // s <= i <= e 만 조건에 해당함
        if (i % k !== 0) return n; // i가 k의 배수여야만 조건에 해당함
        return n + 1;
    }), arr)
}