/* Program Flow
   1. LargestOfFour takes in an arr argument, which consists of multiple nested arrays
   2. We then use the map function to iterate over each individual nested array
   3. These individual nested arrays are then evaluated using the reduce function such that the largest value is returned at the end
   4. Every largest number is then pushed into the new array "long"

function largestOfFour(arr) {
  
 //Step 2 is initiated with the map function iterating over each individual nested array
  var largest = arr.map(function(nums){
  
  // Step 3 is executed using the reduce function on a nested array. Numbers are compared starting from the last number in the array 
     to determine which is the larger one. The larger one is returned and compared with the next number in line.
  var long = nums.reduce(function(a, b) {
    return Math.max(a, b);
});
  
  //This value is then returned and stored in the largest array.
  return long;  
  });
  // We then return the largest array which contains all of the largest numbers in the original array passed in.
  return largest;
}
