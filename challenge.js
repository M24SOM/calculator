// Good Luck! You got this 💪🏾
// Write your code here.

function calculator(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    console.log("Invalid operator");
    return;
  }
  console.log(result);
}

calculator(5, 3, "+"); // Output: 8
calculator(5, 3, "-"); // Output: 2
calculator(5, 3, "*"); // Output: 15
calculator(5, 3, "/"); // Output: 1.6666666666666667
calculator(5, 3, "%"); // Output: Invalid operator
