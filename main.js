function translatePigLatin(str, out) {
  str = document.querySelector('#input').value.toLowerCase();
  const regex = /[aeiou]/; // regex set to vowels
  if (str[0].match(regex)) {
    // if word begins with vowel
    out = `${str}way`;
  } else {
    const index = str.indexOf(str.match(regex)); // find index of first vowel
    const first = str.slice(0, index); // slice string before vowel
    const last = str.slice(index); // slice string after vowel
    out = `${last + first}ay`; // concat and return
  }

  document.querySelector('#result').innerHTML = out;
}
