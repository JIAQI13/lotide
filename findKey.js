const findKey = (target , callback) =>{
  for (let element in target) {
    if (callback(target[element])) {
      return element;
    }
  }
  return undefined;
};
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"