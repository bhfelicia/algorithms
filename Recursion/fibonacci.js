//Recursion

//write a function that takes in a number and returns that element of the fibonacci sequence

function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(23));
