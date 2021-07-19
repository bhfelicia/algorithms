//given 2 positive integers, write a function that determines if the two numbers have the same frequency of digits

function sameFrequency(int1, int2) {
  const int1Arr = int1.toString();
  const int2Arr = int2.toString();
  if (int1Arr.length !== int2Arr.length) return false;
  const freqObj = {};
  for (let i = 0; i < int1Arr.length; i++) {
    const curr = int1Arr[i];
    freqObj[curr] = freqObj[curr] + 1 || 1;
  }
  for (let i = 0; i < int2Arr.length; i++) {
    const curr = int2Arr[i];
    if (freqObj[curr] >= 0) {
      --freqObj[curr];
    } else {
      return false;
    }
    if (freqObj[curr] < 0) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
