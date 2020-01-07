let lowerStr='launch school tech & talk';

function capitalizer(str) {
  let arrayWords=str.split(' ');
  let capArrayWords=arrayWords.map(word=>{
    return word[0].toUpperCase()+word.substring(1);
  })
  return capArrayWords.join(' ');
}

console.log(capitalizer(lowerStr));

let capitalizer2=(str)=>lowerStr.split(' ').map(word=>word[0].toUpperCase()+word.substring(1)).join(' ');

console.log(capitalizer2(lowerStr));
