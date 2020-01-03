let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj=Object.create(myProtoObj);

myObj.qux= 3;

console.log(myProtoObj);
console.log(myObj);
console.log(myProtoObj.foo);
console.log(myObj.foo);
console.log(myObj.qux);

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

console.log('gelou');

for (key in myObj) {
  console.log(key);
}