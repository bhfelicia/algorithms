//Sorting

//Built-in sort doesnt usually work as expected with arrays of numbers. to make it work, we pass a comparator function. the function takes 2 adjacent values, a and b. if a -b is negative, a goes first. if it's positive, b should go first. for ascending order, we do (a, b) => b - a

console.log([7, 2, 4, 1, 9, 6, 3].sort((a, b) => a - b));

//to sort strings by length as opposed to unicode value, use a different comparator function
console.log(
  ["hey", "hello", "hi", "howdy"].sort(
    (str1, str2) => str1.length - str2.length
  )
);
