//listerning and detecting button press 
var buttons = document.querySelectorAll(".drum");

for (n=0; n<buttons.length; n++){
    buttons[n].addEventListener("click", function (){

        var buttonInnerHtml = this.innerHTML
        playSound(buttonInnerHtml);
        buttonsAnimation(buttonInnerHtml);
       
    })
}

//listening and detecting keyboard press 
document.addEventListener('keypress', function(press){
    playSound(press.key);
    buttonsAnimation(press.key);
})

// playing different sounds base on conditions 
function playSound(sound){
    switch (sound) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            
        case 'k':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

        case 'l':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
    
        default:console.log(buttonInnerHtml)
            break;
    }
}


function buttonsAnimation(buttonKey){
    var button = document.querySelector("."+buttonKey)
    button.classList.add('pressed')
    setTimeout(function(){
        button.classList.remove('pressed')
    }, 90);
}

