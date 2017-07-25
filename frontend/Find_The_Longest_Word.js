function findLongestWord(str) {
  
  //First we split the words in the sentence and push each word into an array
  var words = str.split(" ");
  
  //The lengths of these words are then evaluated using a map function and the results stored in the lengths array
 
 var lengths = words.map(function(x) {
   return x.length;
});

  /*Next, by using the reduce function which compares two elements and only returns the larger one starting from the end of the "Lengths"
    array, we are then able to arrive at the length of the longest word. We then return this value */
    
  var longest = lengths.reduce(function(a, b) {
    return Math.max(a, b);
});
  
  return longest;
  
}
