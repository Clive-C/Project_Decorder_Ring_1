// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", ()=> {
    it("should return false if shift value is less than -25", () =>{
        const input = "This is a Test for less than -25 shift";
        const shift = -26;
        const actual = caesar(input, shift, true);

        expect(actual).to.be.false;
    });
    
    it("should return false if shift value is more than 25", () =>{
        const input = "This is a Test for more than 25 shift";
        const shift = 26;
        const actual = caesar(input, shift, true);

        expect(actual).to.be.false;
    });

    it("should return false if shift value is 0", () =>{
        const input = "This is a Test for 0 shift";
        const shift = 0;
        const actual = caesar(input, shift, true);

        expect(actual).to.be.false;
    });
    
    it("should return false if shift value is not present", () =>{
        const input = "This is a Test for shift that is not given";
        const actual = caesar(input);

        expect(actual).to.be.false;
    });
    
    it('should ignore capital letters', () =>{
        const input = "INGORE capital Letters"
        const shift = 1;
        const actual = caesar(input, shift, true);
        const expected = "johpsf dbqjubm mfuufst";

        expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () =>{
        const input = "wrap around zapper";
        const shift = 5;
        const actual = caesar(input, shift, true);
        const expected = "bwfu fwtzsi efuujw"

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non alphabetic symbols in the message before and after encoding", () =>{
        const input = "I'm an encoding-decoding function!?"
        const shift = 2;
        const actual = caesar(input, shift, true);
        const expected = "k'o cp gpeqfkpi-fgeqfkpi hwpevkqp!?"

        expect(actual).to.equal(expected);
    });

    
    it("should maintain spaces and other non alphabetic symbols in the message before and after decoding", () =>{
        const input = "k'o cp gpeqfkpi-fgeqfkpi hwpevkqp!?"
        const shift = 2;
        const actual = caesar(input, shift, false);
        const expected = "i'm an encoding-decoding function!?"

        expect(actual).to.equal(expected);
    });

})