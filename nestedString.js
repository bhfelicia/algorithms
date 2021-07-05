//given a string with balanced parentheses, return the substring most deeply nested in parens.
function findDeepest(str, depth = 0) {
  const arrVals = ["", 0];
  let strEnded = false;
  const stack = [];

  let nestedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
      nestedStr = "";
      strEnded = false;
    } else if (str[i] === ")") {
      stack.pop();
      ++depth;
      strEnded = true;
      if (stack.length < 1) {
        if (depth > arrVals[1]) {
          arrVals[0] = nestedStr;
          arrVals[1] = depth;
        }
        depth = 0;
        nestedStr = "";
      }
    }
    if (!["(", ")"].includes(str[i]) && !strEnded) {
      nestedStr += str[i];
    }
  }
  return arrVals[0];
}

console.log(findDeepest("b(abc(ba(hey))a)a(abc(ab))"));
