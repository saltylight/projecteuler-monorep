import { expect } from "chai";
import { sumOfEvenFibo } from "../src/problem2";

describe("sumOfMultiples function", () => {

    it("should return 10 when input 10", () => {
        const answer = 10;
        const result = sumOfEvenFibo(10);

        expect(result).to.equal(answer);
    });

    it("should return 44 when input is 100", () => {
        const answer = 44;
        const result = sumOfEvenFibo(100);

        expect(result).to.equal(answer);
    });

    it("should return 4613732 when input is 4000000", () => {
        const answer = 4613732;
        const result = sumOfEvenFibo(4000000);

        expect(result).to.equal(answer);
    });
});
