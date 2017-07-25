
function titleCase(str) {
  //Converts all of the words to lower case and splits them into individual words using the spaces between the words
  var words = str.toLowerCase().split(" ");
  
  * /Using the map function, we recursively loop over each item in the words array and capitalise the first letter of each Item. 
    Each item is then passed into the "Final" array once the function has ran */
    
  var Final = words.map(function(string){
  
    //We first identify the first letter of each item that map passes in ( Identified by String ) and convert it to uppercase.
    var FirstLetter = string.charAt(0).toUpperCase();
    
    //This capitalised first letter is then joined to the remainder of it's string(substr(1))
    string = FirstLetter + string.substr(1);
    
    //The function then returns the converted string and passes it into the "final array"
    return string;
  });
  
  //Finally we join all the capitalised letters together using .join(" ") with a space.
  return Final.join(" ");
}


titleCase("I'm a little tea pot");
