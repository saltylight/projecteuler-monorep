import { expect } from "chai";
import { largestPrimeFactorOf } from "../src/problem3";

describe("Problem 3: Largest prime factor", () => {

    it("should return 2 when input is 2", () => {
        const answer = 2;
        const result = largestPrimeFactorOf(2);

        expect(result).to.equal(answer);
    });

    it("should return 5 when input is 15", () => {
        const answer = 5;
        const result = largestPrimeFactorOf(15);

        expect(result).to.equal(answer);
    });

    it("should return 29 when input 13195", () => {
        const answer = 29;
        const result = largestPrimeFactorOf(13195);

        expect(result).to.equal(answer);
    });

    it("should return 6857 when input is 600851475143", () => {
        const answer = 6857;
        const result = largestPrimeFactorOf(600851475143);

        expect(result).to.equal(answer);
    });
});
