let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains=function(city,listOfCities) {
  let included=false;
  listOfCities.forEach(element=>{
    if (city===element) {
      included=true;
    }
  })
  return included;
}

console.log(contains('Barcelona',destinations));
console.log(contains('Madrid',destinations));