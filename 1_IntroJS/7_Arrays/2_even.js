let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

// 1. Define function, call later.
function even1(item){
  if(item%2===0) {
    console.log(item)
  }
}

myArray.forEach(even1);

// 2. regular function

myArray.forEach(function even2(item) {
  if(item%2===0) {
    console.log(item)
    };
}); 

// 3. function expression

myArray.forEach(even3=function (item) {
  if(item%2===0) {
    console.log(item)
    };
}); 

// Anonymous Arrow function

myArray.forEach(item => {
  if(item%2===0) {
    console.log(item)
    };
}); 

// Anonymous function

myArray.forEach(function (item) {
  if(item%2===0) {
    console.log(item)
    };
}); 


