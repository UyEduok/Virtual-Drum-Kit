var buttons = document.querySelectorAll(".drum");

for (n=0; n<buttons.length; n++){
    buttons[n].addEventListener("click", function (){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    })
}

