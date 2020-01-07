let weather='rainy';

if(weather==='sunny'){
  console.log(`It's a beatiful day!`);
} else if (weather==='rainy') {
  console.log(`Grab your umbrella`);
} else {
  console.log(`Let's stay inside`);
}

console.log(
  weather==='sunny'? `It's a beatiful day!` : (weather==='rainy'? `Grab your umbrella` : `Let's stay inside`)
)