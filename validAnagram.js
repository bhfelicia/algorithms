//given two strings, write a func to determine if second string is anagram of first
function validAnagram(str1, str2) {
  if (str1 === "" && str2 === "") return true;
  const freqCount1 = {};
  const freqCount2 = {};

  str1.split("").forEach((char) => {
    freqCount1[char] = (freqCount1[char] || 0) + 1;
  });

  str2.split("").forEach((char) => {
    freqCount2[char] = (freqCount2[char] || 0) + 1;
  });
  for (let key in freqCount1) {
    if (!(key in freqCount2)) return false;
    if (freqCount1[key] !== freqCount2[key]) return false;
  }
  return true;
}

console.log(validAnagram("iceman", "cinema"));
