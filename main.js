let cvs, c
const WIDTH = 800,
    HEIGHT = 800
let mouseX, mouseY, mouseIsClicked, mapIsOpened
let running = false
let player = new Player(4000, 4000, 0)
let canvasScroll = new Vector2D(0, 0)
let planets = Array.from({length:10},p=>new Planet(Math.round(Math.random()*WIDTH*10), Math.round(Math.random()*HEIGHT*10), 120, "planet"))
planets[0].x=4000
planets[0].y=4000



function start() {
    cvs = document.querySelector("canvas")
    c = cvs.getContext("2d")
    cvs.width = WIDTH
    cvs.height = HEIGHT
    running = true
    addEventListeners()
    tick()
}

function reset() {
    player.position.set(WIDTH / 2, HEIGHT / 2)
    player.setDestination(player.position.x, player.position.y)
}

function tick() {
    if (mouseIsClicked) {
        let mouseOffset=new Vector2D(mouseX + canvasScroll.x,mouseY + canvasScroll.y)
        if(mapIsOpened)mouseOffset=new Vector2D((mouseX)*10,(mouseY)*10)
        
        player.setDestination(mouseOffset.x, mouseOffset.y)
        player.rotate(-Math.atan2(player.position.x - mouseOffset.x, player.position.y - mouseOffset.y))
    }
    player.move()
    
    canvasScroll.set(player.position.x - WIDTH / 2, player.position.y - HEIGHT / 2)
    if (running) requestAnimationFrame(draw)
}

function draw() {
    rect(0, 0, WIDTH, HEIGHT, "#000")

    for (let planet of planets) {
        if(planet.x<player.position.x+WIDTH
         &&planet.x>player.position.x-WIDTH
         &&planet.y<player.position.y+WIDTH
         &&planet.y>player.position.y-WIDTH)
        planet.show()
    }

    player.show()
    if (mapIsOpened) {
        drawMap()
    }
    c.fillStyle="#0f0"
    c.fillText(`${player.destination.x} y:${player.destination.y}`,0,10)

    tick()
}

function addEventListeners() {
    cvs.addEventListener("mousedown", mouseDown)
    cvs.addEventListener("mouseup", mouseUp)
    cvs.addEventListener("mousemove", mouseMoved)
    window.addEventListener("keypress", keyPress)
    window.addEventListener("keyup", keyUp)
    window.addEventListener("keydown", keyDown)
}

window.addEventListener("load", start)