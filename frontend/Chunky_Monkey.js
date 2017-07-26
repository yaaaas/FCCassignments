//Using A Loop
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var final = [];
  //For loops allows us to increase our index reference by the proportionate size. (Done in a different way in eg.3)
  for(var i = 0 ; i < arr.length ; i+=size){
    //With each loop, we push a copy of the array in the right proportion into the array "Final"
    final.push(arr.slice(i , i+size));
  }
  //Once the loop has done it's job, we then return final to get the desired result.
  return final;
  
 }
 
 //Using Recursion by modifying the original array so that we eventually end up with an empty array [] (Splice is used)

function chunkArrayInGroups(arr, size) {
  
   //Creates destination to push elements to
  var final = [];
  //Function newChunks is called to proccess the array passed in. It keeps running until arr.length < 0.
  newChunks(arr, size, final);
  //Final is returned with the desired result
  return final;
}

/*This function procceses the array by splicing it. This means that it removes elements from the original array, modifying it. It then
  pushes these elements into the final array before calling itself again.*/
function newChunks (arr, size, final){
    //Condition for running function
    if (arr.length > 0 ){
      /*We do not need to use size + index like the third example since the array has been modified. Eg [ 2, 0 , 2 , 0 , 2 , 0]
        becomes [2,0,2,0] after we splice it. When we splice it again, we simply take the first 2 elements again. Assuming that
        size in this case is 2.    */
      final.push(arr.splice(0, size));
      //Function is recursively called again as long as initialisation condition is met.
      newChunks(arr, size, final);
    }
  
  }

//Recursion using slice. This creates a new array which has elements that are coped from the original array passed into chunkArrayInGroups()
// *Soln is very similar to the 2nd one.
function chunkArrayInGroups(arr,size){
 //Destination array is created to push the copies of the array elements into
 var final = [];
 //newChunks is called with the following variables
 newChunks(0, arr, final, size);
 //The desired modification is done to final and it is returned.
 return final;
  
  
}

 function newChunks(index, arr,dest, size){
   //Initialisation condition.
    if(index < arr.length){
        //dest in this case refers to the array where we push our copies of array elements to ( slice does this )
        dest.push(arr.slice(index,index+size));
        //Each loop, we need to increase the index reference for which we run newChunks on because the original array is unchanged. Hence
        //We need to change the reference position to be able to make copies of different elements in the right proportions.
        newChunks(index+size, arr, dest, size);
    }
   //Function exits when index>arr.length
    }
