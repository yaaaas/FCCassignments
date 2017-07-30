Function whatIsInAName(collection, source) {
  // This creates the final array where values which fulfil the requirement can be stored in.
  var arr = [];
  // First we log the individual properties that we wish to use to test by using Object.Keys and store them in the keys variable.
  var keys = Object.keys(source);
  
  
  //Next we initialise arr to be equal to the result of filtering the collection array. We pass in each element of the collection varaible
  //inside and call it "values"
  arr = collection.filter(function(values){
    
    /* We then return a truthy or falsy value for each instance of values passed in. Only truthy values will be retained and 
 subsequently passed into the arr array. */
    
    return keys.every(function(key){
      // 1. We check if the element passed in has the property that we are testing at the moment
      // 2. We check if the value of the property is equal to that of the corresponding's source's property
      
      // If they meet the two requirements, they will return a true value that will subsequently returned as a truthy value
      return values.hasOwnProperty(key) && values[key]===source[key];
  
  });
  });
 
  // Finally the arr array is returned!
  return arr;
}
