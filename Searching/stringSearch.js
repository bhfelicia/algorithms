//Naive approach

//write a function that takes a string and a smaller string and returns the number of times the smaller string appears in the larger one
"lorie loled", "lol";
function stringSearch(str, substr) {
  let count = 0;
  let toggle = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        toggle = false;
        break;
      } else {
        toggle = true;
      }
    }
    if (toggle) {
      ++count;
      toggle = false;
    }
  }
  return count;
}

console.log(stringSearch("lorie loled", "pop"));
