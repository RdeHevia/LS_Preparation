let randomNumber = Math.round(Math.random());
/*
if (randomNumber===0) {
  console.log('No.');
} else {
  console.log('Yes!');
};
*/

randomNumber? console.log('Yes!') : console.log('No.');
console.log( randomNumber? 'Yes!' : 'No.');