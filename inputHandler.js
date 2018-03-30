function mouseMoved(event) {
    mouseX = event.layerX
    mouseY = event.layerY
}

function mouseClicked(event) {
    mouseIsClicked = true
}

function mouseDown(event) {
    mouseIsClicked = true
}

function mouseUp(event) {
    mouseIsClicked = false
}

function keyPress(event) {
    if (event.key.toUpperCase() == "R") reset()
}

function keyUp(event) {
    if (event.key.toUpperCase() == "M") closeMap()
}

function keyDown(event) {
    if (event.key.toUpperCase() == "M") openMap()
}

function onBlur(event) {

}

function onFocus(event) {

}