let catAge=humanYr=>{
  let catYr=0;

  if (humanYr===1) {
    return catYr=15;
  } else if (humanYr>=2) {
    catYr=15+9;
  }

  if (humanYr>2){
    catYr=catYr+(humanYr-2)*4;
  }

  return catYr;
}

console.log(catAge(10))