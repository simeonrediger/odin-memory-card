export default async function getRandomMonsterData(monsterCount) {
  const allMonsterData = await fetch(
    'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters',
  )
    .then(response => response.json())
    .then(data => data.data);

  return getRandomSample(allMonsterData, monsterCount);
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
