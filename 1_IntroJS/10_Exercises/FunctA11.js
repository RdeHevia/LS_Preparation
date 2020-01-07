let extractLanguage=locale=> locale.slice(0,2);
let extractRegion=locale=> locale.split('_')[1].split('.')[0];
let localGreet=locale=> {
  let language=extractLanguage(locale);
  let region=extractRegion(locale);
  switch (language){
    case 'en':
      switch (region){
        case 'US':
          return 'Hey!';
        case 'GB':
          return 'Hello!';
        case 'AU':
          return 'Howdy!';
      }
    case 'fr':
      return 'Salut!';
    default:
      return 'Pero que dices illo?';
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));

console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));

console.log(localGreet('sp_SP.UTF-8'));