// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || shift == 0 || shift == undefined) return false;
    if (!encode) shift = -1*shift;
    
    let result = [];
    const words = input.split(" ");
        
    words.forEach((word) => {
      let codedWord = "";
      for (let i = 0; i < word.length; i++){
        const letter = word[i].toLowerCase();
        const codedLetter = codeValue(letter,shift);
        if (codedLetter != undefined){
          codedWord += codedLetter;
        }else{
          codedWord += word[i];
        }
      }
      result.push(codedWord);
    });
    return result.join(" ");
  }

  // helper function to process the encoding/decoding of each given letter
  function codeValue (letter, shift){
    const key = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, 
    "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25};
    const reverseKey = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const letterValue = key[letter];
    let index = shift + letterValue;
    
    if (index < 0) index = 26 + index;
    if (index > 25) index = index % 26; 
    
    return reverseKey[index];
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
