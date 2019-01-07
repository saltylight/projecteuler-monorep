
function calculateMultiples(inputArray, startIndex, endIndex) {
    let result = 1;
    for (let i = startIndex; i <= endIndex; i += 1) {
        result *= parseInt(inputArray[i], 10);
    }
    return result;
}

export const largestProduct = (inputString: string, seriesLength: number): number => {
    if (inputString.length < seriesLength) {
        // error case
        return -1;
    }

    const inputArray = inputString.split("");
    let result = 0;
    for (let endIndex = seriesLength - 1; endIndex < inputArray.length; endIndex += 1) {
        const candidate = calculateMultiples(inputArray, endIndex - (seriesLength - 1), endIndex);
        result = candidate > result ? candidate : result;
    }
    return result;
};
