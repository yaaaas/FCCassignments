$("#increase").on("click", function(){
 
   timer+= 120
   view.updateview();
});

$("#decrease").on("click", function(){
  
  timer-=120;
  view.updateview();
  
})

$("#start").on("click", function(){
  duration = timer;
  handler.countdown();
})

$("#stop").on("click", function(){
  var status = document.getElementById("stop").innerHTML
  check = !check;
  view.updateview();
  if(status === "Stop Timer!"){
    document.getElementById("stop").innerHTML = "Resume Timer!";
    
  }
  else if(status === "Resume Timer!"){
     timer++;
     document.getElementById("stop").innerHTML = "Stop Timer!"
     handler.countdown();
    
  }
  
})

$("#reset").on("click", function(){
  check = false;
  timer = duration;
  view.updateview();
})


var duration = 0;
var check = true;
var timer =25*60;
var second = timer%60;

$("document").ready(function(){
  document.getElementById("time").innerHTML = Math.round(timer/60) + ": 00";
})

view = {
  
  updateview: function(){
    if(timer%60<10){
      document.getElementById("time").innerHTML = Math.floor(timer/60) + " : 0" + (timer%60);
    } else{
       document.getElementById("time").innerHTML = Math.floor(timer/60) + " : " + (timer%60);
    }
   
  }
}

handler = {
  countdown: function(){
     if(timer > 0){
       if(check === true){
          timer -=1;
          view.updateview();;
          setTimeout( handler.countdown , 1000);
       }
    
    if(timer === 0){
      alert("Time's Up!")
      check = false;
      timer = 300;
    }
    
  } else {
    console.log("Time's up! Time for your Break :)")
     
  }
    
  }
}
