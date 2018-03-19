let cvs, c
const WIDTH = 800,
    HEIGHT = 800
let mouseX,mouseY
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

function tick() {
   console.log(
       Math.atan2(player.x-mouseX,player.y-mouseY)
       *
       -(180/Math.PI)
        
    )
    player.direction=-Math.atan2(player.x-mouseX,player.y-mouseY)
    if(running)requestAnimationFrame(draw)
}

function draw(){
    rect(0,0,WIDTH,HEIGHT,"#000")
    player.show()
    tick()
}
function addEventListeners(){
    cvs.addEventListener("click",mouseClicked)
    cvs.addEventListener("mousemove",mouseMoved)
    cvs.addEventListener("keypress",keyPress)
    cvs.addEventListener("keyup",keyUp)
    cvs.addEventListener("keydown",keyDown)
}

window.addEventListener("load", start)
