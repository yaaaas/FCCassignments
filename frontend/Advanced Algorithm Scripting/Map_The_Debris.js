
//The function first takes in an array called arr
function orbitalPeriod(arr) {
  //We first set the constants we will be using in each loop as global constants and leave them outside the forEach loop.
   var GM = 398600.4418;
  var earthRadius = 6367.4447;
 
 //We use the forEach function to loop through each individual element in the array that has been passed in
 arr.forEach(function(data){
 //First we find the value of the satelitle's orbital radius by adding the earth's radius to it's altitude
  var radius = earthRadius + data.avgAlt;
  
  //Next we calculate the indivdual variables which will be used in the calculation later on. 
  var a = Math.pow(radius,3);
  var inside = a/GM;
  
  //Calculating The Period
  var oP = 2*Math.PI*Math.pow(inside, 0.5);
  oP = Math.round(oP);
  
  //Lastly we delete the avgAlt property and add in the new orbitalPeriod property and set that to oP
  delete data.avgAlt;
  data.orbitalPeriod = oP;
      
  });
  
  //We then return the modified array to get what we want.
  return arr;
  
}
