declare global {
    interface Number {
        isPrime(): boolean;
        getBiggestExponent(maxNumber: number): number;
    }
}

Number.prototype.isPrime = function(): boolean {
    for (let i = 2, s = Math.sqrt(this); i <= s; i++) {
        if (this % i === 0) { return false; }
    }
    return this !== 1 && this !== 0;
};

Number.prototype.getBiggestExponent = function(maxNumber: number): number {
    let result = 1;
    while (result * this <= maxNumber) {
        result *= this;
    }
    return result;
};

export const smallestMultipleOf = (maxNumber: number): number => {
    const resultArray: number[] = [];
    for (let i = 1; i <= maxNumber; i += 1) {
        if (i.isPrime()) {
            resultArray.push(i.getBiggestExponent(maxNumber));
        }
    }
    return resultArray.reduce((prev, curr) => {
        return prev * curr;
    });
};
