//frequency counter

function areThereDuplicates(...args) {
  const freqObj = {};
  for (let i = 0; i < args.length; i++) {
    const curr = args[i];
    if (freqObj[curr]) {
      return true;
    } else {
      freqObj[curr] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 6, 6, 7));
