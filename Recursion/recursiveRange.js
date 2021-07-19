//Recursion

//Write a function that accepts a number and adds every number from that number counting down to zero

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
