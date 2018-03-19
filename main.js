let cvs, c
const WIDTH = 800,
    HEIGHT = 800
let mouseX,mouseY
let running=false
function start() {
    cvs = document.querySelector("canvas")
    c = cvs.getContext("2d")
    cvs.width = WIDTH
    cvs.height = HEIGHT
    running=true
    addEventListeners()
    tick()
}

function tick() {
    console.log(mouseX,mouseY);
    
    if(running)requestAnimationFrame(draw)
}

function draw(){
    rect(0,0,WIDTH,HEIGHT,"#000")
    tick()
}
function addEventListeners(){
    cvs.addEventListener("click",mouseMoved)
}

window.addEventListener("load", start)
