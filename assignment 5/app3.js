function determineNumberSign(num) {
    if (num > 0) {
      return "The number is positive.";
    } else if (num < 0) {
      return "The number is negative.";
    } else {
      return "The number is zero.";
    }
  }
  
  const num = parseInt(prompt("Enter a number:"));
  const result = determineNumberSign(num);
  console.log(result);