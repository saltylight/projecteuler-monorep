import "./helper";

export const nthPrime = (nth: number): number => {
    let result = 0;
    // exception for prime `2`
    if (nth >= 1) {
        result = 2;
    }
    let currentIndex = 3;
    let countPrimes = nth - 1;

    while (countPrimes > 0) {
        if (currentIndex.isPrime()) {
            result = currentIndex;
            countPrimes -= 1;
        }
        currentIndex += 2;
    }
    return result;
};
