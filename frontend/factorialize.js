
function factorialize(num) {
  //Using A For-Loop
  var result = 1;
  
  for(var i = num; i >0 ; i--){
    result *= i;
  }
  return result;
  
  // Using Recursion
  if(num === 0){
    return 1;
  }
  return num *factorialize(num-1);
  
}

