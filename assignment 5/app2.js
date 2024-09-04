function compareIntegers(num1, num2) {
    if (num1 > num2) {
      return "The larger number is: " + num1;
    } else if (num1 < num2) {
      return "The larger number is: " + num2;
    } else {
      return "The two numbers are equal.";
    }
  }
  
  const num1 = parseInt(prompt("Enter the first integer:"));
  const num2 = parseInt(prompt("Enter the second integer:"));
  const result = compareIntegers(num1, num2);
  console.log(result);
  