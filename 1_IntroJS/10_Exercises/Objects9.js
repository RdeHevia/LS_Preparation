let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let nestedObject={};

nestedArray.forEach(vector=>{
  nestedObject[vector[0]]=vector[1];
});

console.log(nestedObject);


let obj = Object.fromEntries(nestedArray);

console.log(obj);