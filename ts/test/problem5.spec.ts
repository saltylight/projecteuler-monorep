import { expect } from "chai";
import { smallestMultipleOf } from "../src/problem5";

describe("Problem 5: Smallest multiple", () => {

    it("should return 2520 when input is 10", () => {
        const answer: number = 2520;
        const result: number = smallestMultipleOf(10);

        expect(result).to.equal(answer);
    });

    it("should return 232792560 when input is 20", () => {
        const answer: number = 232792560;
        const result: number = smallestMultipleOf(20);

        expect(result).to.equal(answer);
    });
});
