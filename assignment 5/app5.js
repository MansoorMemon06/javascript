

function validatePassword(correctPassword) {
    const userPassword = prompt("Enter your password:");
  
    // Check if user has entered password
    if (userPassword === null || userPassword === "") {
      return "Please enter your password.";
    }
  
    // Check if passwords match
    if (userPassword === correctPassword) {
      return "Correct! The password you entered matches the original password.";
    } else {
      return "Incorrect password.";
    }
  }
  
  const correctPassword = "your_strong_password"; // Replace with your desired password
  const result = validatePassword(correctPassword);
  console.log(result);