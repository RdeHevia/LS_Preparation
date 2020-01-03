let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArray=Object.keys(obj);
let keyUpper=Object.keys(obj).map(item=>item.toUpperCase());
console.log(keyArray);
console.log(keyUpper);
