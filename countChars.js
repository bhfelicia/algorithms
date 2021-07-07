//write a function that takes a string and returns counts of each character in the string

const countChars = (str) => {
  if (!str) return null;

  const charCount = {};
  str.split("").forEach((letter) => {
    const char = letter.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (charCount[char]) {
        ++charCount[char];
      } else {
        charCount[char] = 1;
      }
    }
  });
  return charCount;
};

console.log(countChars("hfFDJOWE!!ekl21"));
