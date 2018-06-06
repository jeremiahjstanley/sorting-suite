const populateArray = (number) => {
  let array = [];

  for (let i = 0; i < number; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  return array;
}

const methodStressTest = (number, array, sortingAlgorithm) => {
  for (let i = 0; i < number; i++) {
    sortingAlgorithm(array)
  }
  return array
}

const sortStressTest = (number, array) => {
  for (let i = 0; i < number; i++) {
    array.sort((a, b) => a -b)
  }
  return array
}

export { populateArray, methodStressTest, sortStressTest }




