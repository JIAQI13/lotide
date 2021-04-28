const letterPositions = function(sentence) {
  // logic to update results here
  let result = {};
  let target = sentence.toLowerCase();
  for (const letter in target) {
    if (target[letter] === ' ') {
      //pass
    } else if (result[target[letter]]) {
      result[target[letter]].push(Number(letter));
    } else {
      result[target[letter]] = [Number(letter)];
    }
  }
  return result;
  };

console.log(letterPositions('hello'));//{h:[0],e:[1],l:[2,3],o:[4]}
