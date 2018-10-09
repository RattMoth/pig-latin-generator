function translateWord(word) {
  const regex = /[aeiou]/; // regex set to vowels
  if (word[0].match(regex)) {
    // if word begins with vowel
    return `${word}way`;
  }
  const index = word.indexOf(word.match(regex)); // find index of first vowel
  const first = word.slice(0, index); // slice string before vowel
  const last = word.slice(index); // slice string after vowel
  return `${last + first}ay`; // concat and return
}

/* todo: sentence functionality works as expected
Now deal with capital leters

*/

function translatePigLatin(str) {
  str = document.querySelector('#input').value;
  const sentenceArr = str.toLowerCase().split(' ');
  const out = sentenceArr.map(word => translateWord(word)).join(' ');
  document.querySelector('#result').innerHTML = out;
  document.getElementById('result').style.border = '1px solid black';
  document.querySelector('#title').innerHTML = 'Your Result:';
}
