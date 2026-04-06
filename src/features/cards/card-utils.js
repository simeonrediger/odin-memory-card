export function formatMonsterName(name) {
  const words = name.split(' ');
  return words.map(formatWord).join(' ');
}

export async function getRandomMonsterData(monsterCount) {
  const allMonsterData = await fetch(
    'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters',
  )
    .then(response => response.json())
    .then(data => data.data);

  return getRandomSample(allMonsterData, monsterCount);
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

function getRandomSample(array, n) {
  array = [...array];
  const randomSample = [];

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    randomSample.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }

  return randomSample;
}
