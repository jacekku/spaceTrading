let cvs, c
const WIDTH = 800,
    HEIGHT = 800
let mouseX,mouseY,mouseIsClicked
let running=false
let player=new Player(400,400,0)
let canvasScroll=new Vector2D(0,0)
let planet=new Planet(400,400,100,"planet")
planet.createMoon(100,100,20,"moon")
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
    player.position.set(WIDTH/2,HEIGHT/2)
}
function tick() {
    if(mouseIsClicked){
        player.setDestination(mouseX+canvasScroll.x,mouseY+canvasScroll.y)
        player.rotate(-Math.atan2(player.position.x-(mouseX+canvasScroll.x),player.position.y-(mouseY+canvasScroll.y)))
    }
    player.move()
    planet.rotate()
    canvasScroll.set(player.position.x-WIDTH/2,player.position.y-HEIGHT/2)
    if(running)requestAnimationFrame(draw)
}

function draw(){
    rect(0,0,WIDTH,HEIGHT,"#000")
    planet.show()
    // rect((WIDTH/2)-canvasScroll.x,(HEIGHT/2)-canvasScroll.y,100,100,"green")
    player.show()
    c.fillStyle="white"
    c.fillText(`x:${mouseX} y:${mouseY}`,0,10)
    c.fillText(`x:${mouseX+canvasScroll.x} y:${mouseY+canvasScroll.y}`,0,20)
    c.fillText(`x:${player.position.x} y:${player.position.y}`,0,30)


    tick()
}
function addEventListeners(){
    cvs.addEventListener("mousedown",mouseDown)
    cvs.addEventListener("mouseup",mouseUp)
    cvs.addEventListener("mousemove",mouseMoved)
    window.addEventListener("keypress",keyPress)
    window.addEventListener("keyup",keyUp)
    window.addEventListener("keydown",keyDown)
}

window.addEventListener("load", start)
