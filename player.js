class Player {
    constructor(x, y, direction) {
        this.x = x
        this.y = y
        this.direction = direction
        this.maxSpeed = 0.1
        this.velocity = 0.0
        this.baseAcceleration = 0.01
        this.destination={x:this.x,y:this.y}
    }


    setDestination(x_,y_){
        this.destination={x:x_,y:y_}
    }
    move() {
        // this.x += -(this.x-this.destination.x)*this.velocity 
        // this.y += -(this.y-this.destination.y)*this.velocity
        this.x += -Math.cos(this.direction)*this.velocity
        this.y += -Math.sin(this.direction)*this.velocity
        console.log(Math.cos(this.direction),Math.sin(this.direction));
        
        return true
    }
    rotate(direction) {
        if (!direction) return false
        this.direction = direction
        return true
    }
    speedUp(acceleration = this.baseAcceleration) {
        if (this.velocity + acceleration >= this.maxSpeed) return false
        this.velocity += acceleration
        return true
    }

    show() {
        c.save()
        c.translate(this.x, this.y)
        c.rotate(this.direction)
        rect(-2, -10, 4, 5, "white")
        rect(-5, -5, 10, 10, "white")
        c.restore()
    }
}