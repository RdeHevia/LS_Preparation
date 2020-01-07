const repeat=(n,str)=>{
  let newStr=str;
  if(n>=2){
    for(let i=2;i<=n; i+=1){
      newStr+=str;
    };
  }
  return newStr;
}

console.log(repeat(100,'ha'));