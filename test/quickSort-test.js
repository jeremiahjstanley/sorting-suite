import { expect } from 'chai';
import { quickSort } from '../lib/quickSort'; 
import { populateArray, stressTest } from './testing-functions'; 


describe('QuickSort', () => {
  let array;

  it('should sort a array from lowest to highest', () => {
    array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    expect(quickSort(array)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })

  it('should alphabetize a letter array', () => {
    array = ['z', 'q', 'b', 'c']

    expect(quickSort(array)).to.deep.equal(['b', 'c', 'q', 'z']);
  })

  it('should sort floating point integers', () => {
    array = [1.2, 1.12, 1 , 2, 1.25]

    expect(quickSort(array)).to.deep.equal([1, 1.12, 1.2, 1.25, 2]);
  })

  it('should sort arrays with duplicate values', () => {
    array = [3, 3, 1 , 2, 5]

    expect(quickSort(array)).to.deep.equal([1, 2, 3, 3, 5]);
  })

  it('should sort negative numbers', () => {
    array = [-5, 0, 1 , 3, -2]

    expect(quickSort(array)).to.deep.equal([-5, -2, 0, 1, 3]);
  })

  it('should sort a small array', () => {
    array = [1, 4, 10, 3, 11, 6, 2]

    let sortPrototype = array.sort((a,b) => {
      return a - b;
    });
    let actual = quickSort(array)

    expect(actual).to.deep.equal(sortPrototype);
  })

  it('should sort a medium array', () => {
    array = populateArray(15000)

    let sortPrototype = array.sort((a,b) => {
      return a - b;
    });

    let actual = quickSort(array)

    expect(actual).to.deep.equal(sortPrototype);
  })

  it('should sort a large array', () => {
    array = populateArray(28000)

    let sortPrototype = array.sort((a,b) => {
      return a - b;
    });

    let actual = quickSort(array)

    expect(actual).to.deep.equal(sortPrototype);
  })
  
}) 

