const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () =>{
    it("should translate leters i and j to 42 when encoding", () =>{
        const input = "ji message";
        const expected = "4242 23513434112251";
        const actual = polybius(input, true);

        expect(actual).to.equal(expected);
    });

    it("should translate 42 to i/j when decoding", () =>{
        const input = "4223513434112251";
        const expected = "i/jmessage";
        const actual = polybius(input, false);

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () =>{
        const input = "A Message";
        const expected = "11 23513434112251"
        const actual = polybius(input, true);

        expect(actual).to.equal(expected);
    })

    it("should maintain spaces in the message before and after encoding or decoding", () =>{
        const input = "A Message";
        const expected = "11 23513434112251"
        const actual = polybius(input, true);

        expect(actual).to.equal(expected);
    });
});
