const populateArray = (number) => {
  let array = [];

  for (let i = 0; i < number; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  return array;
}

const stressTest = (number, array, sortingAlgorithm) => {
  for (let i = 0; i < number; i++) {
    sortingAlgorithm(array)
  }
}

export {populateArray, stressTest}

