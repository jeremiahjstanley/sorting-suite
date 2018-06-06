export const mergeSort = collection => {
  let array = [...collection]
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeSorted(mergeSort(left), mergeSort(right));
};

export const mergeSorted = (left, right) => {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
 
  if (left.length) {
    sortedArray = [...sortedArray, ...left];
  }
  if (right.length) {
    sortedArray = [...sortedArray, ...right];
  }
  return sortedArray;
};


