//Given a sorted array and a target average, determine if there are 2 nums in the array whose average is the target average

function averagePair(arr, avg) {
  if (!arr.length) return false;
  let pointOne = 0;
  let secondPoint = arr.length - 1;
  while (pointOne < secondPoint) {
    const pointAvg = (arr[pointOne] + arr[secondPoint]) / 2;
    if (avg < pointAvg) {
      --secondPoint;
    } else if (avg > pointAvg) {
      ++pointOne;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 4], 3));
