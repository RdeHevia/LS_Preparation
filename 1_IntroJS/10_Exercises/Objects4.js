let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',

  greet: function (arr) {
    console.log(`Hej, ${arr}`);
  }
 
};

jane.greet('Bobby'); // Hej, Bobby!

