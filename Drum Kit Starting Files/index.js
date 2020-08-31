
var n = document.querySelectorAll(".drum").length;

for(i = 0 ; i < n; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //alert("Hi hello");
        var bname = this.innerHTML;
        makesound(bname);
        buttonanima(bname);    
    });
                                                   
}


    document.addEventListener("keydown", function(event){
        
        makesound(event.key);
        buttonanima(event.key) ;   
    });
                                                       


function makesound(x)
{
    
    switch(x)
    {
            
        case "w" :var tom1 = new Audio("sounds/tom-1.mp3")  ;
                      tom1.play();
                       break;
         case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key); 
    }
}
function buttonanima(x)
{
    var d = document.querySelector("." + x);
    d.classList.add("pressed");
    setTimeout(function()
              {

                 d.classList.remove("pressed");
    
    },100);
}