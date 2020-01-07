let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let arrayCar=[];

for(prop in vehicle) {
  arrayCar.push(prop);
};

console.log(arrayCar);