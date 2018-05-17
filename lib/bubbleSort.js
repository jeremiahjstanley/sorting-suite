let array = [1, 4, 7, 3, 5, 2, 6];

function bubbleSort(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length - 1; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

bubbleSort(array)
