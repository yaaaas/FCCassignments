
function reverseString(str) {
  
  // Normal Method //
  /*var splitted = str.split("");
  var result = splitted.reverse().join("");
  
  return result;*/
  
  //Really Long Method//
 var final = "";
  for(var i = str.length ; i >0 ; i--){
      final += str[i-1];  
  }
  return final;
  
  
  // Recursive Method //
  if(str <= 1){
    return str;
  }
  return reverseString(str.substr(1)) + str[0];
}

reverseString("hello");
