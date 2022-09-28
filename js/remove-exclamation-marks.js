let stringWithoutExclamations = "";
function removeExclamationMarks(s) {
  
  for (i = 0; i < s.length; i += 1) {
    if (s[i] !== "!") {
      stringWithoutExclamations = stringWithoutExclamations + s[i];
    } 
     
  }
  return stringWithoutExclamations;
}

removeExclamationMarks("Evrika! The solution is found!!!");
console.log(stringWithoutExclamations);