//hash functions convert keys into valid array indices
//hash functions should be fast - constant time
//distributes outputs uniformly
//deterministic - same input, same output - no uncertainty/multiple answers/outputs
//hash function takes in a string a the length of our array eg hash("pink", 200)

//a hash that works for strings:
function hash(key, arrLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLen;
  }
  return total;
}
//above hash function not good because only hashes strings, not constant time, and could be more random - too clustered
//improved version: uses Math.min to ensure we don't loop a million times if we get a super long string and adds a weird prime to better randomize output and spread keys out more uniformly
//also helps if array you're putting vals int has a prime length
function hash2(key, arrLen) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrLen;
  }
  return total;
}
//how do we handle collisions?
