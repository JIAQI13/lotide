const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(target) {
  return target[0];
};

const tail = function(target) {
  let result = [];
  for (let i = 1; i < target.length; i++) {
    result.push(target[i]);
  }
  //console.log(result);
  return result;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!