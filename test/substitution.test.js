const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution", () =>{
    it("should return false if the given alphabet isn't exactly 26 charaters", () =>{
        const alphabet = "abcdefghijkl";
        const input = "message"
        const actual = substitution(input, alphabet, true)

        expect(actual).to.be.false;
    });
    
    it("should correctly translate the given phrase, based on the alphabet given to the function", () =>{
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const input = "my test message";
        const expected = "nb gvhg nvhhztv";
        const actual = substitution(input, alphabet, true);

        expect(actual).to.equal(expected);
    });

    it("should return false if there are any duplicate characters in the given alphabet", () =>{
        const alphabet = "abcdefghijklmabcdefghijklm";
        const input = "my test message";
        const actual = substitution(input, alphabet, true);

        expect(actual).to.be.false;
    });

    it("should maintain spaces in the message before and after encoding",() =>{
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const input = "my test message";
        const expected = "nb gvhg nvhhztv";
        const actual = substitution(input, alphabet, true);

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message before and after decoding",() =>{
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const input = "nb gvhg nvhhztv";
        const expected = "my test message";
        const actual = substitution(input, alphabet, false);

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const input = "my TEST message";
        const expected = "nb gvhg nvhhztv";
        const actual = substitution(input, alphabet, true);

        expect(actual).to.equal(expected);
    })
})