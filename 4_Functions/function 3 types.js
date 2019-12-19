//1-Regular function

function greetPeople1() {
  console.log('Good Morning');
};

//2-Function expression

let greetPeople2=function(){
  console.log('Good Morning');
};

//3a- Arrow function. If the body contains just 1 expression, everything right to the '=>' has an implicit return

let greetPeople3=() => console.log('Good Morning');

//3b - Arrow function. If the body contains 2 or more 

greetPeople1();
greetPeople2();
greetPeople3();