let greet=language=>{
  switch (language) {
    case 'en':
      return 'Hi!'
    case 'fr':
      return 'Salut!';
    default:
      return 'Que dices illo?';
  };
};

console.log(greet('en'));
console.log(greet('fr'));
console.log(greet('dsf'));

// break isn't needed because return exists the function immediatly