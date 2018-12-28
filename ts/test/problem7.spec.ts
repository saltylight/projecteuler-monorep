import { expect } from "chai";
import { nthPrime } from "../src/problem7";

describe("Problem 7: 10001st prime", () => {

    it("should return 13 when input is 6", () => {
        const answer: number = 13;
        const result: number = nthPrime(6);

        expect(result).to.equal(answer);
    });

    it("should return 29 when input is 10", () => {
        const answer: number = 29;
        const result: number = nthPrime(10);

        expect(result).to.equal(answer);
    });

    it("should return 104743 when input is 10001", () => {
        const answer: number = 104743;
        const result: number = nthPrime(10001);

        expect(result).to.equal(answer);
    });
});
