class Planet {
    constructor(x, y, size, type) {
        this.x = x
        this.y = y
        this.size = size
        this.type = type
        this.rotation = 0
        this.rotationSpeed = 0.005
        this.color = this.type == "planet" ? "#1f1" : "gray"
    }
    show() {
        c.save()
        c.translate(this.x - canvasScroll.x, this.y - canvasScroll.y)
        c.rotate(this.rotation)
        fillEllipse(0,0,this.size,this.size,this.color)
        c.restore()
    }
    mapShow(){
        fillEllipse(this.x/10,this.y/10,this.size/10,this.size/10,this.color)
    }
    rotate() {
        this.rotation += this.rotationSpeed
    }
}