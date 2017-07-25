/* Program Flow
   1. LargestOfFour takes in an arr argument, which consists of multiple nested arrays
   2. We then use the map function to iterate over each individual nested array
   3. These individual nested arrays are then evaluated using the reduce function such that the largest value is returned at the end
   4. Every largest number is then pushed into the new array "long"

function largestOfFour(arr) {
  
  var largest = arr.map(function(nums){
  var long = nums.reduce(function(a, b) {
    return Math.max(a, b);
});
  
  return long;  
  });
  // You can do this!
  return largest;
}
