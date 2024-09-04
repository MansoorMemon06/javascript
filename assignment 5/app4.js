function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char.toLowerCase());
  }
  
  const inputChar = prompt("Enter a character:");
  const result = isVowel(inputChar);
  console.log("Is the character a vowel?", result);