let rlSync=require('readline-sync');
let age=Number(rlSync.question("What's your age?"))

//Option 1
for (let i=1;i<=4;i++){
  age=age+10;
  console.log('In ' + 10*i + 'years, you will be ' + age + 'years old.');
}

//Option 2
age=29
for (let i=1;i<=4;i++){
  console.log(`In ${10*i} years, you will be ${age+10*i} years old.`);
}