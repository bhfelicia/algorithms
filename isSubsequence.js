//Multiple pointers

//write a function that takes 2 strings and checks if the characters in the first string form a subsequence of the characters in the second string, in order

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1.length) return true;
  if (!str2.length) return false;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
