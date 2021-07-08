//given two strings, write a func to determine if second string is anagram of first
function validAnagram(str1, str2) {
  if (str1 === "" && str2 === "") return true;
  if (str1.length !== str2.length) return false;
  const freqCount1 = {};
  str1.split("").forEach((char) => {
    freqCount1[char] = (freqCount1[char] || 0) + 1;
  });
  for (let i = 0; i < str2.length; i++) {
    if (!freqCount1[str2[i]]) return false;
    else freqCount1[str2[i]] -= 1;
  }
  return true;
}

console.log(validAnagram("iceman", "cinema"));
