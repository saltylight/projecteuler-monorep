export const sumOfMultiples = (targetNumber: number, m1: number, m2: number) => {
    // sum of m1
    let m1Numbers: number = Math.floor((targetNumber - 1) / m1);
    let sumOfM1: number = m1Numbers * (m1Numbers + 1) / 2 * m1;

    let m2Numbers: number = Math.floor((targetNumber - 1) / m2);
    let sumOfM2: number = m2Numbers * (m2Numbers + 1) / 2 * m2;

    let m12Numbers: number = Math.floor((targetNumber - 1) / (m1 * m2));
    let sumOfM12: number = m12Numbers * (m12Numbers + 1) / 2 * (m1 * m2);

    return sumOfM1 + sumOfM2 - sumOfM12;
};

