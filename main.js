let cvs, c
const WIDTH = 800,
    HEIGHT = 800
let mouseX,mouseY,mouseIsClicked
let running=false
let player=new Player(400,400,0)
function start() {
    cvs = document.querySelector("canvas")
    c = cvs.getContext("2d")
    cvs.width = WIDTH
    cvs.height = HEIGHT
    running=true
    addEventListeners()
    tick()
}
function reset(){
    player.x=WIDTH/2
    player.y=HEIGHT/2
}
function tick() {
    
    if(mouseIsClicked){
        player.setDestination(mouseX,mouseY)
        player.speedUp()
        player.rotate(-Math.atan2(player.x-mouseX,player.y-mouseY))
    }
    player.move()
    if(running)requestAnimationFrame(draw)
}

function draw(){
    rect(0,0,WIDTH,HEIGHT,"#000")
    player.show()
    tick()
}
function addEventListeners(){
    // cvs.addEventListener("click",mouseClicked)
    cvs.addEventListener("mousedown",mouseDown)
    cvs.addEventListener("mouseup",mouseUp)
    cvs.addEventListener("mousemove",mouseMoved)
    window.addEventListener("keypress",keyPress)
    window.addEventListener("keyup",keyUp)
    window.addEventListener("keydown",keyDown)
}

window.addEventListener("load", start)
