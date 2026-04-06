export default function formatMonsterName(name) {
  const words = name.split(' ');
  return words.map(formatWord).join(' ');
}

function formatWord(word) {
  // As of 2026-04-05, all Roman numerals in the data do not exceed IV.
  const isRomanNumeral = ['i', 'ii', 'iii', 'iv'].includes(word);

  // As of 2026-04-05, all parentheticals in the data contain a single word.
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
