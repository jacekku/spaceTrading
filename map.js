function openMap() {
    mapIsOpened = true
}

function closeMap() {
    mapIsOpened = false
}


function drawMap() {
    let border=10
    rect(border/2,border/2,WIDTH-border,HEIGHT-border,"#bbb")
    rect(border,border,WIDTH-border*2,HEIGHT-border*2,"#222")
    
    for (let planet of planets) {
        planet.mapShow()
    }
    player.mapShow()
    
}