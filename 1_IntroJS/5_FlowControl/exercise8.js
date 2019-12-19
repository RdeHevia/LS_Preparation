function numberRange(x){
  if (0<=x && x<=50){
    console.log(`${x} is between 0 and 50`);
  } else if (51<x && x<=100) {
    console.log(`${x} is between 51 and 100`);
  } else if (x<0) {
    console.log(`${x} is less than 0`);
  } else {
    console.log(`${x} is greater than 100`)
  }
}

numberRange(-25);
numberRange(10);
numberRange(61);
numberRange(101);