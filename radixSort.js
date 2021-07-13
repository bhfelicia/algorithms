//Sorting algorithm that doesn't use comparisons that works on lists of numbers

//exploits fact that more digits means bigger number

//Integer sort

//needs helper function

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//next helper, mostDigits, takes digitCount and finds number with most digits in input array

function mostDigits(arr) {
  let longNum = 0;
  arr.forEach((num) => {
    const currDig = digitCount(num);
    longNum = Math.max(longNum, currDig);
  });
  return longNum;
}

function radixSort(arr) {
  const longest = mostDigits(arr);
  for (let i = 0; i < longest; i++) {
    const arrayBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const currDigit = getDigit(arr[j], i);
      arrayBuckets[currDigit].push(arr[j]);
    }
    arr = [].concat(...arrayBuckets);
  }
  return arr;
}

console.log(radixSort([9, 98, 456, 58, 6, 985623, 2]));
