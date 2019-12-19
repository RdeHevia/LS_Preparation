function add(a,b) {
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function times(num1,num2){
  return num1*num2;
}

let sum=add(20,45);
let difference=subtract(80,10);
let operation=add(20,subtract(60,15));
let operation2=times(add(20,45),subtract(80,10));

console.log(sum);
console.log(difference);
console.log(operation);
console.log(operation2);
