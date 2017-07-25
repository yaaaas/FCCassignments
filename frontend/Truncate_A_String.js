function truncateString(str, num) {
  
  //This first conditional statement checks if the string is longer than the limit passed into the function
  if(str.length > num){
    //If the limit is less than or equal to 3, we do not add in the ... in the count for the final truncated string
    if(num <= 3){
      // We use the Substr function to obtain the first num elements of the string from 0 to 2 and add the "..." behind.
      return str.substr(0,num) + "...";
    }
    //Else we use the substr function to obtain the first num-3 elements of the string and add a "..." behind 
    return str.substr(0,num-3) + "...";
  }else{
    //Othewise, if the string's length is less than or equal to the limit num, we simply return the string.
    return str;
  }
  
  
