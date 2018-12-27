export const sumOfMultiples = (targetNumber: number, m1: number, m2: number) => {
    // sum of m1
    const m1Numbers: number = Math.floor((targetNumber - 1) / m1);
    const sumOfM1: number = m1Numbers * (m1Numbers + 1) / 2 * m1;

    const m2Numbers: number = Math.floor((targetNumber - 1) / m2);
    const sumOfM2: number = m2Numbers * (m2Numbers + 1) / 2 * m2;

    const m12Numbers: number = Math.floor((targetNumber - 1) / (m1 * m2));
    const sumOfM12: number = m12Numbers * (m12Numbers + 1) / 2 * (m1 * m2);

    return sumOfM1 + sumOfM2 - sumOfM12;
};
