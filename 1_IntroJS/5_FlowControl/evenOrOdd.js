function evenOrdOdd1(x){
  x%2===0? console.log('even') : console.log('odd')
}

evenOrdOdd1(9);

function evenOrOdd2(x){
  if (Number.isInteger(x)===true) {
    if (x%2===0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log(`The input isn't a number`);
  }
}

evenOrOdd2('Paco');
