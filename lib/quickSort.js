export const quickSort = array => {
  if (array.length < 2) {
    return array;
  }
  let pivot = array.pop();

  let greaterThan = [];

  let lessThan = [];

  array.forEach(number => {
    if (number <= pivot) {
      lessThan.push(number);
    } else if (number > pivot) {
      greaterThan.push(number);
    }
  });
  array = [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]; 
  return array;
};
