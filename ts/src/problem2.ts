// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// odd, even. odd, odd, even. odd, odd, even, (odd, odd, even) * n

const isEven = (target: number): boolean => target % 2 === 0;

export const sumOfEvenFibo = (targetNumber: number) => {
    const fibo: number[] = [1, 2];
    let sum: number = 0;
    for (let i = 1; fibo[i] <= targetNumber; i += 1) {
        if (isEven(fibo[i])) {
            sum += fibo[i];
        }
        fibo[i + 1] = fibo[i] + fibo[i - 1];
    }
    return sum;
};
