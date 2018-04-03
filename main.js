let cvs, c
const WIDTH = 800,
    HEIGHT = 800
let mouseX, mouseY, mouseIsClicked, mapIsOpened
let running = false
let player = new Player(4000, 4000, 0)
let canvasScroll = new Vector2D(0, 0)
let tickCounter=0

stars=[]
stars[0]=new Star(4000,4000,500)
star1=stars[0]
planet1=new Planet(6000,4000,200)
star1.addPlanet(planet1)
moon1=new Moon(5500,4000,50)
planet1.addMoon(moon1)


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


    for (const star of stars) {star.physics(tickCounter/500)}
    


    player.move()
    
    canvasScroll.set(player.position.x - WIDTH / 2, player.position.y - HEIGHT / 2)
    tickCounter++
    if (running) requestAnimationFrame(draw)
}

function draw() {
    rect(0, 0, WIDTH, HEIGHT, "#000")

    for (const star of stars) {star.show()}

    player.show()
    if (mapIsOpened) {
        drawMap()
    }
    c.fillStyle="#0f0"

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