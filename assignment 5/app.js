function checkCharacterType(char) {
    const charCode = char.charCodeAt(0);
  
    if (charCode >= 48 && charCode <= 57) {
      return "Number";
    } else if (charCode >= 65 && charCode <= 90) {
      return "Uppercase letter";
    } else if (charCode >= 97 && charCode <= 122) {
      return "Lowercase letter";
    } else {
      return "Invalid character";
    }
  }
  
  const inputChar = prompt("Enter a character:");
  const result = checkCharacterType(inputChar);
  console.log("The character is:", result);
  