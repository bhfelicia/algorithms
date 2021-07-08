//write a function which accepts 2 arrays and returns true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same
function same(arr, arrSquared) {
  if (arr.length !== arrSquared.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arrSquared) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 5], [9, 1, 4, 11]));
