function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}

function moveRight(){
    let right = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    right += 100;
    if(right<300){
        character.style.left = right + "px";
    }
}

document.addEventListener("keydown", event => {
    if(event.key === "ArrowLeft"){moveLeft();}
    if(event.key === "ArrowRight"){moveRight();}
});

var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
});

setInterval(function(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if(characterLeft == blockLeft && blockTop<500 && blockTop>300){
        block.style.animation = "none";
        block.style.display = "none";
        character.style.display = "none";
        alert("Ai pierdut ! Scor: "+counter);
    }
},1);

document.getElementById("left").addEventListener("touchstart",moveLeft);
document.getElementById("right").addEventListener("touchstart",moveRight);