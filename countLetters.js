const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🤙Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`💩💩💩💩💩💩Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const countletters = function (sentense) {
    let result = {};
    for (const letter of sentense.toLowerCase()){
        if (letter === ' '){
            //pass
        }else if (result[letter]){
            result[letter] ++;
        }else{
            result[letter] = 1;
        }
    }
    return result;
  }

console.log(countletters("Lighthouse in the house"));