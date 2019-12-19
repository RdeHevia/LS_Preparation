let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array){
  return array.map(function (item) {
    return item.length;
  }).filter(item=>item%2!==0);
};

function test(array){
  return array.filter(item => item.length%2!==0)
}
/*
function oddLengths(array){
  return array.map(function (item) {
    return item.length;
  });
};
*/
console.log(oddLengths(arr)); // => [1, 5, 3]
console.log(test(arr));