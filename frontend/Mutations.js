
//Using a For Loop to iterate over each item in the array
function mutation(arr) {
  //First we establish what will be compared, which is the first argument in the arr
  var tobecompared = arr[0].toLowerCase();
  
  //Next, we split the compared string into its constituent letters
  var comparison = arr[1].toLowerCase().split("");
  
  //Lastly we establish a default boolean which we use as an indicator of whether the string contains the letters we want
  var result = true;  
  
  //We then create a loop that will iterate over every element in comparison. 
  for(var i = 0; i < comparison.length;i++){
  
  //If the item does not exist in the string
    if(tobecompared.indexOf(comparison[i]) === -1){
      //We change the value of result to reflect this
      result = false;
      //This exist the for loop
      break;
    }
  }
  //We then return the result of the test.
  return result;
  
  
}

//Using the ForEach function()

function mutation(arr) {
//Similar to eg.1 we create the three variables which will be used in our test
  var tobecompared = arr[0].toLowerCase();
  var comparison = arr[1].toLowerCase().split("");
  var test = true;
  
  /*This time, instead of using a for loop, we use the forEach function [ Note that the map function can similarly be used too but its
not a good choice]*/
  var result = comparison.forEach(function(letter){
  //If the item does not exist in the string
    if(tobecompared.indexOf(letter) === -1){
      //We immediately change the value of test to false
      test = false;
      
    }
      tobecompared.indexOf(letter) === -1
    
  });
   //test result is returned.
    return test;
  
  
}
