export const quickSort = collection => {
  let array = [...collection]
  if (array.length < 2) {
    return array;
  }
  let pivot = array.pop();

  let greaterThan = [];

  let lessThan = [];

  array.forEach(number => {
    if (number < pivot) {
      lessThan.push(number);
    } else {
      greaterThan.push(number);
    }
  });
  array = [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]; 
  return array;
};