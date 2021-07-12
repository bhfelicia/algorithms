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
  // if (i < arr1.length - 1) {
  //   const remainingVals = arr1.slice(i + 1, arr1.length);
  //   newArr.concat(remainingVals);
  // }
  // if (j < arr2.length - 1) {
  //   const remaining = arr2.slice(j + 1, arr2.length);
  //   newArr.concat(remaining);
  // }
  return newArr;
}

console.log(merge([100, 200], [0, 4, 6, 7, 8]));
