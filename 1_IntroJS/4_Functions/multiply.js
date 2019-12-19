function timesOutput(x,y){
  return console.log(`${x}*${y}=${x*y}`);
};

function userInput(prompt){
  let rl=require('readline-sync');
  return Number(rl.question(prompt));
};

let n1=userInput('Enter the first number');
let n2=userInput('Enter the second number');

timesOutput(n1,n2);