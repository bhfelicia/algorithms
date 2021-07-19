//Sorting and Divide & Conquer

//write a function merging 2 sorted arrays

function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

//mergeSort breaks the array into halves until you have arrays that are empty or have 1 element each
//once have smaller sorted arrays, merge those w other sorted arrays until back at full length of input array
//return merged/sorted array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
