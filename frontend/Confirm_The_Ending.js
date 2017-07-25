//This function checks if a string ends with target. Target can be any word, letter or phrase.

/*Program Flow
1. A string and a Target is passed into the function
2. A boolean comparison is then used to compare the two values.

str.length - target.length allows us to take advantage of the substr method. The result of this is then compared with the original target.

*/


function confirmEnding(str, target) {
  //str.substr(str.length-target.length) allows us to splice off just the right portion of the string that will be compared to the target.
  //We then use a boolean operator to compare the two. 
  if(str.substr(str.length-target.length) === target){
    return true;
  }else{
    return false;
  }
  
}
