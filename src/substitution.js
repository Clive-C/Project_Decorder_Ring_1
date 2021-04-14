// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (alphabet == undefined || alphabet.length != 26 || uniqueSub(alphabet)){
      return false;
    }
    
    let key = keyAssign(alphabet,encode);
    let result = [];
    const words = input.split(" ");
        
    words.forEach((word) => {
      let codedWord = "";
      for (let i = 0; i < word.length; i++){
        const letter = word[i].toLowerCase();
        if (key[letter] != undefined){
          codedWord += key[letter];
        }else{
          codedWord += word[i];
        }
      }
      result.push(codedWord);
    });
    return result.join(" ");
  }

  function keyAssign(alphabet,encode){
    const standard = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const key = {};
    for (let i = 0; i < alphabet.length; i++){
      if (encode) key[standard[i]] = alphabet[i];
      else key[alphabet[i]] = standard[i];
    }
    return key; 
  }

  function uniqueSub(alphabet){
    const list = [];
    let duplicate = false;
    for (let i = 0; i < alphabet.length; i++){
      list.push(alphabet[i]);
    }
    const sorted = list.sort((letterA, letterB) => (letterA < letterB ? -1 : 1))

    for (let i = 1; i < sorted.length; i++){
      if (sorted[i] == sorted[i-1]){
        duplicate = true;
      }
    }
    return duplicate;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
