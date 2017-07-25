function palindrome(str) {
  // Removes all alphanumeric characters and converting any uppercase characters to lower case characters
  str = str.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  
  //Reversing the string so you have it in reverse to compare to
  check = str.split("").reverse().join("");
  
  /*By using the === equality check, we are then able to ascertain if "Check" is equal to "str". 
    If they are equal, it is a palindrome and hence we return true, else we return false.*/
    
  if(str === check){
    return true;
  }else{
    return false;
  }
  
}
