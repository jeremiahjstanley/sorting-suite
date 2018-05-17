export const populateArray = number => {
  for (let i = 0; i < number; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
}

export const stressTest = (number, array, sortingAlgorithm) => {
  for (let i = 0; i < number; i++) {
    sortingAlgorithm(array)
  }
}

