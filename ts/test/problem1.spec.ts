import { expect } from "chai";
import { sumOfMultiples } from "../src/problem1";

describe("Problem 1: Multiples of 3 and 5", () => {

    it("should return 23 when input is 10, 3, 5", () => {
        const answer = 23;
        const result = sumOfMultiples(10, 3, 5);

        expect(result).to.equal(answer);
    });

    it("should return 233168 when input is 1000, 3, 5", () => {
        const answer = 233168;
        const result = sumOfMultiples(1000, 3, 5);

        expect(result).to.equal(answer);
    });

});
