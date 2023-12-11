const bubbleSort = require('./bubbleSort');
describe('bubbleSort', () => {

  // The function sorts an array of integers in ascending order.
  it('should sort an array of integers in ascending order', () => {
    const arr = [4, 2, 1, 3];
    const result = bubbleSort(arr);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  // The function handles an empty array and returns an empty array.
  it('should handle an empty array and return an empty array', () => {
    const arr = [];
    const result = bubbleSort(arr);
    expect(result).toEqual([]);
  });

  // The function handles an array with a large number of elements (e.g. 1000) and returns the sorted array within a reasonable time.
  it('should handle an array with a large number of elements and return the sorted array within a reasonable time', () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const startTime = new Date().getTime();
    const result = bubbleSort(arr);
    const endTime = new Date().getTime();
    
    // Check if the result array is sorted
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
    }
  
    expect(endTime - startTime).toBeLessThan(1000);
  });

  // The function handles an array with non-integer elements and throws an error.
  it('should handle an array with non-integer elements and throw an error', () => {
    const arr = [4, 2, '1', 3];
    expect(() => bubbleSort(arr)).toThrowError('Input array must contain only numeric values');
  });

  // The function handles an array with null or undefined elements and throws an error.
  it('should handle an array with null or undefined elements and throw an error', () => {
    const arr = [4, 2, null, 3];
    expect(() => bubbleSort(arr)).toThrowError('Input array must contain only numeric values');
  });
});
