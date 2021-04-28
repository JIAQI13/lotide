const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(myObject,myValue) {
  for (const myKey in myObject) {
    if (myValue === myObject[myKey]) {
      return myKey;
    }
  }
  return 'cannot find key pair for this value';
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);