// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Sam Harris => S.H
// patrick feeney => P.F

let initials = "";
function abbrevName(name){

  let array = name.split(" ");
  array[0] = array[0].slice(0, 1).toUpperCase();
  array[1] = array[1].slice(0, 1).toUpperCase();
  
  initials = array.join(".");
  return initials;
  // code away

}

abbrevName("Olena Stasiuk");
console.log(initials);