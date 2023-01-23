var l = document.querySelectorAll(" .drum").length;



// animation

function animation(x) {
    var activeButton = document.querySelector("." + x);
    activeButton.classList.add("pressed");

    // remove animation after 100ns

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// sound
function sounds(x) {
    switch (x) {
        case "w":
            // alert("w");
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kb = new Audio("sounds/kick-bass.mp3");
            kb.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;


    }
}


//for mouse

for (var i = 0; i < l; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        sounds(this.innerHTML);
        animation(this.innerHTML);
    });
}

// for keypad

document.addEventListener("keypress", function(event) {
    sounds(event.key);
    animation(event.keyL);
});