function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const digits = Math.floor(Math.log10(x));

    for (let i = 0; i < digits / 2; i += 1) {
        if (
            Math.floor((x / 10 ** i) % 10) !==
            Math.floor(x / 10 ** (digits - i)) % 10
        ) {
            return false;
        }
    }

    return true;
};