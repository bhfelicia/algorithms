//Recursion

//write a function called power that takes a base and an exponent and returns that base to the power of the exponent

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(power(3, 3));
