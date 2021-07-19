//Sorting

//split array into arrays of 0 or 1, select a single elem, pivot point, and finding the index where the pivot should be in the sorted array

//partition/privot helper

//rearrange elems in arr so all vals less than pivot moved to left, and all vals greater are to the right
// returns idx of pivot

function pivot(arr, start = 0) {
  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  const pivotVar = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotVar > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 6, 9, 1, 5, 2, 3]));
