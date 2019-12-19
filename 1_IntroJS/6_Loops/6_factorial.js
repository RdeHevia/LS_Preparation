function factorial(n){
  let facto=1
  for (i=n;n>=1;n-=1) {
    facto*=n;
  }
  return facto;
}



function factorial2(n){
  
  if (n==1) {
    return 1;
  }

  if (n>1) {
    
    n*=factorial2(n-1);
    
  }
  return n;
}

console.log(factorial(8));
console.log(factorial2(8));