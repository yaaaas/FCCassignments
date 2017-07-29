 
  $("a").on("click",function(){
   
    
    evalstring = handlers.compilenumbers(this.id , evalstring);
    document.getElementById("expression").innerHTML = evalstring;
    view.updateview(evalstring);
    
  })

var evalstring = "";

var handlers = {
  

  
  compilenumbers : function(input, currentequation) {
    
    if(input === "evaluate"){
      
      return eval(currentequation);
    } 
    else if(input === "deleteall"){
      currentequation = "0"
      return currentequation;
    }
    else if(input === "backspace"){
      if(currentequation === "0" || currentequation.length === 1){
        return 0;
      }
      else {
        currentequation = currentequation.substr(0,currentequation.length - 1);
      return currentequation;
      }
      
      
    }
    else {
      
      currentequation += input;
      
      return currentequation;
    } 
    
  }
 
    
}

var view = {
  updateview: function(input){
   document.getElementById("expression").innerHTML = input;
  }
}

 
                          

                          
