const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🤙Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`💩💩💩💩💩💩Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
const eqArrays = function (first,second) {
    let result = false;
    if (first.length === second.length) {
        for ( let i =0; i <= first.length; i++) {
            result = (first[i] === second[i]);
        }
    }
    console.log(result); 
    return result;
} 
    


  // TEST CODE
  /*
  eqArrays([1, 2, 3], [1, 2, 3]) // => true
  eqArrays([1, 2, 3], [3, 2, 1]) // => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  */
  //assertEqual(eqArrays([], []), true); // => should PASS