function factorial(n){
  let facto=1
  for (i=n;n>=1;n-=1) {
    facto*=n;
  }
  return facto;
}

console.log(factorial(8));