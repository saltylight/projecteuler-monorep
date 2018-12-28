import { expect } from "chai";
import { sumSquareDifference } from "../src/problem6";

describe("Problem 5: Smallest multiple", () => {

    it("should return 2640 when input is 10", () => {
        const answer: number = 2640;
        const result: number = sumSquareDifference(10);

        expect(result).to.equal(answer);
    });

    it("should return 25164150 when input is 100", () => {
        const answer: number = 25164150;
        const result: number = sumSquareDifference(100);

        expect(result).to.equal(answer);
    });
});
