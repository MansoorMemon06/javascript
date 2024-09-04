// Declare variables to hold the rule descriptions
let rule1 = "Variable names can only contain letters, numbers, $ (dollar sign), and _ (underscore).";
let example1 = "$Adam_123";

let rule2 = "Variables must begin with a letter, $ (dollar sign), or _ (underscore).";
let example2 = "$adam, _123, adam";

let rule3 = "Variable names are case sensitive.";
let rule4 = "Variable names should not be JS reserved keywords.";

// Display the rules using the declared variables
document.write("<p>" + rule1 + "</p>");
document.write("<p> <strong>" + example1 + "</strong></p>");
document.write("<p>" + rule2 + "</p>");
document.write(" <strong>" + example2 + "</strong></p>");
document.write("<p>" + rule3 + "</p>");
document.write("<p>" + rule4 + "</p>");

