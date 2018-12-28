const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) { return false; }
    }
    return num !== 1 && num !== 0;
};

export const largestPrimeFactorOf = (targetNumber: number): number => {
    let result = -1;
    for (let i = 1, root = Math.sqrt(targetNumber); i <= root; i += 1) {
        if (targetNumber % i === 0) {
            if (isPrime(i)) {
                result = i;
            }
            if (isPrime(targetNumber / i)) {
                result = targetNumber / i;
                return result;
            }
        }
    }

    return result;
};
