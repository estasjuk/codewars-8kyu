// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons!
// each dragon takes 2 bullets to be defeated, our hero has no idea how many
// bullets he should carry..Assuming he's gonna grab a specific given number of bullets
// and move forward to fight another specific given number of dragons, will he survive ?

// Return True if yes, False otherwise :)

let isSurvive  = true;
function hero(bullets, dragons){
//Get Coding!
  
      if(bullets >= dragons*2) {
        return isSurvive = true
      }
  else 
    return isSurvive = false;
        
 
}
hero(10, 5);
console.log(isSurvive);
hero(120, 75);
console.log(isSurvive);
hero(30, 12);
console.log(isSurvive);
hero(10, 20);
console.log(isSurvive);