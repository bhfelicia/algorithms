//Sorting
//selection sort is like bubble sort. loop through array, set a minimum which is set as the index of the minimum val, update minimum as we iterate through array and then swap at end to be the beginning

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
  }
  return arr;
}

console.log(selectionSort([4, 38, 2, 27, 6, 7, 66, 9, 2]));
