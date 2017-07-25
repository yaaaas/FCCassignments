
function repeatStringNumTimes(str, num) {
  // This prevents the function from running if user gives an invalid input i.e. num < 0 because we cannot use a negative number.
  
  if(num < 0){
    //This calls the function to return immediately and end the program
    return "";
  }
  
  //If the user inputs num === 1, we can consider it as a base case and simply return the original string.
 
 if(num === 1){
    return str;
  }
  
  /*Otherwise, we recursively run this program till we get the desired outcome. Each time the loop runs, we decrease num by 1 till we reach
    our base case when num === 1 and it returns str. This is the deepest nested case and then allows the function to recursively evaluate
    the desired end product.*/
    
  return str+repeatStringNumTimes(str,num-1);
}
