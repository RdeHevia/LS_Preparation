a=[1, 2, 3, 4, 5, 6, 50, 8, 9, 100];
let b=[1, 1];

let average=arr=>{
  return arr.reduce((result,currentValue)=>{
    return result=result+currentValue;
  })/arr.length;
};

let max=arr=>{
  return arr.reduce((result,currentValue)=>{
    if (result<currentValue){
      result=currentValue;
    }
    return result;
  })
};

let stdDeviation=arr=>{
  let mean=average(arr);
  let squareDiff=arr.map(num=>(num-mean)**2);
  let sigma2=squareDiff.reduce((result,currentValue)=>result+currentValue)/(arr.length-1);
  return sigma2**0.5
}
//console.log(average(a));
//console.log(max(a));
console.log(stdDeviation(a));
console.log(stdDeviation(b));