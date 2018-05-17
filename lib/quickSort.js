export const quickSort = array => {
  if (array.length <= 1) {
    return array
  }
  let pivot = array.pop();
  let greaterThanPivot = [];
  let lessThanPivot =[];
  for (var i = 0;i < array.length; i++) {
    if (array[i] < pivot) {
      lessThanPivot.push(array[i]);
    } else if (array[i] > pivot) {
      greaterThanPivot.push(array[i]);
    }
  } array = [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)]; 
  return array
} 
