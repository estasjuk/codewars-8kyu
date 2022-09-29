//Simple, remove the spaces from the string, then return the resultant string.


let stringWithoutSpaces = "";
function noSpace(x){
  stringWithoutSpaces = x.split(" ").join("");
  
      return stringWithoutSpaces;
   
}

noSpace("The wheels on the bus go round and round");
console.log(stringWithoutSpaces);