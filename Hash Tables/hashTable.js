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
//can use separate chaining and linear probing
//with separate chaining, at each idx in array we store values using a more sophisticated data structure to allow us to store multiple vals at same index (eg array or linked list)
//eg if darkblue and salmon both evaluate to 4, store them like [["darkblue", '#00008b], ["salmon", "#fa8072"]] - 2 arrays within an array
//linear probing is a strategy such that when we find a collision, we search through the array to find the next empty slot so as to keep each index at only one key-value pair
//hash table class

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const num = this._hash(key);
    if (!this.keyMap[num]) {
      this.keyMap[num] = [];
    }
    this.keyMap[num].push([key, value]);
  }
  get(key) {
    const num = this._hash(key);
    if (this.keyMap[num]) {
      const nested = this.keyMap[num].filter((arr) => {
        arr.includes(key);
      });
      return nested[0][1];
    }
    return undefined;
  }
  keys(curr = this, array = []) {
    // if(Array.isArray(curr[0])) {
    //   array.push(this.keys(curr[]))
    // } else {
    //   if(this.get(curr[0]))
    // }
  }
  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}
const newHash = new HashTable(41);
newHash.set("hello", "goodbye");
newHash.set("pb", "jam");
newHash.set("cookies", "cream");
newHash.set("you", "me");
console.log(newHash.values());
