// sum of the squares = (a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca
// square of the sum = a^2 + b^2 + c^2
// difference = 2ab + 2bc + 2ca

export const sumSquareDifference = (maxNumber: number): number => {
    let result = 0;
    for (let i = 1; i <= maxNumber; i += 1) {
        for (let j = i + 1; j <= maxNumber; j += 1) {
            result += 2 * i * j;
        }
    }
    return result;
};
