let array = [4, 2, 6, 8, 3, 1, 5, 7, 10, 9];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++)
    if (array[i] > array[i + 1]) {
      [array[i] , array[i + 1]] = [array[i + 1], array[i]]
    } else (array[i] < array[i + 1])
      for (let j = 1; j < array.length; j++) {
        [array[j] , array[j + 1]] = [array[j + 1], array[j]]
        return array
      }



// insertion line between 0 | 1
// array[0] is sorted
//  4  |  2, 6, 8, 3, 1, 5, 7, 10, 9
// move insertion line
//  4,  2 | 6, 8, 3, 1, 5, 7, 10, 9
// [0] [1]| 
// compare index [0] [1]
// 4, 2 | 6, 8, 3, 1, 5, 7, 10, 9
// switch index [0] [1] - coniditional triggered
// 2, 4 | 6, 8, 3, 1, 5, 7, 10, 9
// move insertion line
//  2,  4,  6  | 8, 3, 1, 5, 7, 10, 9
// [0] [1] [2] |  
// compare index [1] [2]
//  2, 4, 6 | 8, 3, 1, 5, 7, 10, 9
// no change is neccessary [1] [2] 
//  2, 4, 6 | 8, 3, 1, 5, 7, 10, 9
// move insertion line
//  2,  4,  6,  8 | 3, 1, 5, 7, 10, 9
// [0] [1] [2] [3] |  
// compare index [2] [3]
//  2, 4, 6, 8 | 3, 1, 5, 7, 10, 9
// no change is neccessary [2] [3]
//  2, 4, 6, 8 | 3, 1, 5, 7, 10, 9
// move insertion line
//  2,  4,  6,  8,  3, | 1, 5, 7, 10, 9
// [0] [1] [2] [3] [4] |  
// compare index [3] [4]
//  2, 4, 6, 8, 3, | 1, 5, 7, 10, 9
// switch index [3] [4] - conditional triggered
//  2, 4, 6, 3, 8, | 1, 5, 7, 10, 9
// compare index [2] [3]
///  2, 4, 6, 3, 8, | 1, 5, 7, 10, 9
// switch index [2] [3] - conditional triggered
//  2, 4, 3, 6, 8, | 1, 5, 7, 10, 9
// compare index [1] [2]
///  2, 4, 3, 6, 8, | 1, 5, 7, 10, 9
// switch index [1] [2] - conditional triggered
//  2, 3, 4, 6, 8, | 1, 5, 7, 10, 9
// compare index [0] [1]
//  2, 3, 4, 6, 8, | 1, 5, 7, 10, 9
// no change is neccessary [0] [1]
//  2, 3, 4, 6, 8, | 1, 5, 7, 10, 9
};

insertionSort(array)