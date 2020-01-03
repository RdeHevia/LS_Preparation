let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function logMatch(array, regex) {
  array.forEach(element => {
    if (regex.test(element)) {
      console.log(element);
    }
  })
}


logMatch(words, /lab/);