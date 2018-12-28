import { expect } from "chai";
import { largestPalindromeOf } from "../src/problem4";

describe("Problem 4: Largest palindrome product", () => {

    it("should return 9 when input is 1", () => {
        const answer = 9;
        const result = largestPalindromeOf(1);

        expect(result).to.equal(answer);
    });

    it("should return 9009 when input is 2", () => {
        const answer = 9009;
        const result = largestPalindromeOf(2);

        expect(result).to.equal(answer);
    });

    it("should return 906609 when input is 3", () => {
        const answer = 906609;
        const result = largestPalindromeOf(3);

        expect(result).to.equal(answer);
    });
});
