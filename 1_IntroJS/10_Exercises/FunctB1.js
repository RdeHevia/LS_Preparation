function greet(greeting='Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!

let f2=(greet2='Hello')=>console.log(greet2);

f2()
f2('sdasd');
f2(undefined);