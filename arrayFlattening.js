let nestedArray = [[1,2],[3,4,5],[6,7]]

let flattenedArray = [].concat(...nestedArray)
console.log(flattenedArray);

// or

console.log(nestedArray.flat(Infinity));

