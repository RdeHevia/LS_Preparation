function greet(greeting='Hello',receipment='world') {
  console.log(greeting + ', ' + receipment);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!