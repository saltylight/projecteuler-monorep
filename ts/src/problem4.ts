declare global {
    interface Number {
        isPalindrome(): boolean;
    }
}

Number.prototype.isPalindrome = function(): boolean {
    const self: string = this.toString();
    return self.split("").reverse().join("") === self;
};

export const largestPalindromeOf = (numberOfDigits: number): number => {
    let result = 0;
    const lowerBound = Math.pow(10, numberOfDigits - 1);
    const upperBound = Math.pow(10, numberOfDigits);

    for (let i: number = lowerBound; i < upperBound; i += 1) {
        for (let j: number = i; j < upperBound; j += 1) {
            const target: number = i * j;
            result = target.isPalindrome() && target > result ? target : result;
        }
    }

    return result;
};
