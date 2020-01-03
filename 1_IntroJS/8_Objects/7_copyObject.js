let objToCopy = {
  foo: 1,
  bar: 2,
};
/*
function copyObj(obj) {
  return obj;
}
*/
function copyObj(sourceObject, keys) {
  let destinationObject = {};

  
  keys.forEach(function(key) {
    destinationObject[key] = sourceObject[key];
  });

  return destinationObject;
  
}



/*
let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2
*/
let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

