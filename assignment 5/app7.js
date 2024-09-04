function greetBasedOnTime(time) {
    if (time >= 0 && time < 6) {
      return "Good night";
    } else if (time >= 6 && time < 12) {
      return "Good morning";
    } else if (time >= 12 && time < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
  
  const inputTime = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));
  
  if (isNaN(inputTime)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const greeting = greetBasedOnTime(inputTime);
    console.log(greeting);
  }function greetBasedOnTime(time) {
    if (time >= 0 && time < 6) {
      return "Good night";
    } else if (time >= 6 && time < 12) {
      return "Good morning";
    } else if (time >= 12 && time < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
  
  const InputTime = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));
  
  if (isNaN(inputTime)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const greeting = greetBasedOnTime(inputTime);
    console.log(greeting);
  }