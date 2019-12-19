//My solution

let fib0=0
let fib1=1
let fib2

console.log(fib0);
console.log(fib1);
for (let i=2; i<=20; i+=1){
  fib2=fib1+fib0;
  fib0=fib1;
  fib1=fib2;
  console.log(fib2);
}

//Recursive function solution

function fibonacci(number){
  if (number<2){
    return number;
  } else {
    return fibonacci(number-1)+fibonacci(number-2);
  }
}

console.log(fibonacci(20));