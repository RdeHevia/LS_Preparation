let array = [1, 'a', '1', 3, NaN, 3.14, -4, null, false];

//1st way
function removeNonInteger(vector) {
  return vector.filter(item=>Number.isInteger(item))
}


let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]

//2nd way

/*

function removeNonInteger(array) {
  return array.filter(Number.isInteger);
}

*/

