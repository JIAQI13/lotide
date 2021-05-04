
const flatten = function(array) {  
  let result = [];
  array.forEach(item=>{Array.isArray(item) ? result = result.concat(flatten(item)) : result.push(item);})
  return result;
};
module.exports = flatten;
