function bubbleSort(arr) {
  if (arr === null || arr === undefined) {
    throw new Error("Input array is null or undefined");
  }
  
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw new Error('Input array must contain only numeric values');
    }
  }
  
  let len = arr.length;
  let swapped = false;
  
  // Outer loop for each pass
  for (let i = 0; i < len; i++) {
    // Inner loop for comparisons and swaps
    for (let j = 0; j < len - 1 - i; j++) {
      // Compare adjacent elements and swap if necessary
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true;
      }
    }
    // If no swaps were made, array is sorted
    if (!swapped) {
      return arr;
    }
  }
  return arr;
}

module.exports = bubbleSort;