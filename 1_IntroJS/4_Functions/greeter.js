/*Option 1

function greeter(){
  let rlSync=require('readline-sync');
  let name=rlSync.question('What is your name?');
  let lastName=rlSync.question('What is your last name?');
  return console.log(`Hello, ${name} ${lastName}!`);
};

greeter(); */

//Option 2

function getName (input){
  let rlSync=require('readline-sync');
  let answer=rlSync.question(input);
  return answer;
};

let firstName=getName('Whats your first name?');
let lastName=getName('Whats your last name?');
console.log(`Hello, ${firstName} ${lastName}`);