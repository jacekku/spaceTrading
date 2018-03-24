function mouseMoved(event){
    mouseX=event.layerX
    mouseY=event.layerY
}
function mouseClicked(event){
    mouseIsClicked=true
}
function mouseDown(event){
    mouseIsClicked=true
}
function mouseUp(event){
    mouseIsClicked=false
}
function keyPress(event){
    if(event.key.toUpperCase()=="R")reset()
    
}
function keyUp(event){

}
function keyDown(event){
    
}
function onBlur(event){

}
function onFocus(event){

}