export default function formatMonsterName(name) {
  const words = name.split(' ');
  return words.map(formatWord).join(' ');
}

function formatWord(word) {
  // All Roman numerals in the current data do not exceed IV.
  const isRomanNumeral = ['i', 'ii', 'iii', 'iv'].includes(word);

  // All parentheticals in the current data contain a single word.
  const isParenthetical = word.startsWith('(') && word.endsWith(')');

  if (isRomanNumeral) {
    return word.toUpperCase();
  } else if (isParenthetical) {
    return '(' + capitalizeFirstLetter(word.slice(1, -1)) + ')';
  } else {
    return capitalizeFirstLetter(word);
  }
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
