function rect(x=0,y=0,width=10,height=width,clr="#fff"){
    c.fillStyle=clr
    c.fillRect(x,y,width,height)
}

function fillEllipse(x,y,r1,r2,fill,rotation=0,startAngle=0,endAngle=Math.PI*2){
    c.fillStyle=fill
    c.beginPath()
    c.ellipse(x,y,r1,r2,rotation,startAngle,endAngle)
    c.fill()
}
function strokeEllipse(x,y,r1,r2,fill,rotation=0,startAngle=0,endAngle=Math.PI*2){
    c.fillStyle=fill
    c.beginPath()
    c.ellipse(x,y,r1,r2,rotation,startAngle,endAngle)
    c.stroke()
}