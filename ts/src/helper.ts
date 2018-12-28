declare global {
    interface Number {
        isPrime(): boolean;
    }
}

Number.prototype.isPrime = function(): boolean {
    for (let i = 2, s = Math.sqrt(this); i <= s; i++) {
        if (this % i === 0) { return false; }
    }
    return this !== 1 && this !== 0;
};

export {};
