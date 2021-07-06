//write a function that takes a string and returns counts of each character in the string

const countChars = (str) => {
  if (!str) return null;
  str = str.toLowerCase();
  const charCount = {};
  str.split("").forEach((letter) => {
    if (charCount[letter]) {
      ++charCount[letter];
    } else {
      charCount[letter] = 1;
    }
  });
  return charCount;
};

console.log(countChars(""));
