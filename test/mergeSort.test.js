import { expect } from 'chai';
import { mergeSort } from '../lib/mergeSort'; 
import { populateArray, methodStressTest, sortStressTest } from './testing-functions'; 


describe('MergeSort', () => {
  let array;

  it('should sort a array from lowest to highest', () => {
    array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    let actual = mergeSort(array)

    expect(actual).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })

  it('should alphabetize a letter array', () => {
    array = ['z', 'q', 'b', 'c']

    let actual = mergeSort(array)

    expect(actual).to.deep.equal(['b', 'c', 'q', 'z']);
  })

  it('should sort floating point integers', () => {
    array = [1.2, 1.12, 1 , 2, 1.25]

    let actual = mergeSort(array)

    expect(actual).to.deep.equal([1, 1.12, 1.2, 1.25, 2]);
  })

  it('should sort arrays with duplicate values', () => {
    array = [3, 3, 1 , 2, 5]

    let actual = mergeSort(array)

    expect(actual).to.deep.equal([1, 2, 3, 3, 5]);
  })

  it('should sort negative numbers', () => {
    array = [-5, 0, 1 , 3, -2]

    let actual = mergeSort(array)

    expect(actual).to.deep.equal([-5, -2, 0, 1, 3]);
  })

  it('should sort a small array', () => {
    array = [1, 4, 10, 3, 11, 6, 2]

    let expected = array.sort((a,b) => a - b);

    let actual = mergeSort(array)

    expect(actual).to.deep.equal(expected);
  })

  it('should sort a medium array', () => {
    array = populateArray(100000)

    let expected = array.sort((a,b) => a - b);

    let actual = mergeSort(array)

    expect(actual).to.deep.equal(expected);
  })

  it('should sort a large array', () => {
    array = populateArray(100000)

    let expected = array.sort((a,b) => a - b);

    let actual = mergeSort(array)

    expect(actual).to.deep.equal(expected);
  })

  it('should sort many arrays', () => {
    array = populateArray(100)

    let expected = sortStressTest(1000, array)

    let actual = methodStressTest(1000, array, mergeSort)

    expect(actual).to.deep.equal(expected);
  })
  
}) 
