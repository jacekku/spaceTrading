class Player {
    constructor(x, y, direction) {
        this.position=new Vector2D(x,y)
        this.destination=new Vector2D(this.position.x,this.position.y)
        this.direction = direction
        this.maxSpeed = 0.5
        this.velocity = 0.0
        this.baseAcceleration = 0.1
    }


    setDestination(x,y){
        this.destination.set(x,y)
        
    }
    move() {
        if(this.position.equals(this.destination))return false
        this.position=this.position.moveTowards(this.destination,1)
        
        return true
    }
    rotate(direction) {
        if (!direction) return false
        this.direction = direction
        return true
    }
    speedUp(acceleration = this.baseAcceleration) {
        if (this.velocity + acceleration > this.maxSpeed) return false
        this.velocity += acceleration
        return true
    }

    show() {
        c.save()
        c.translate(this.position.x, this.position.y)
        c.rotate(this.direction)
        rect(-2, -10, 4, 5, "white")
        rect(-5, -5, 10, 10, "white")
        c.restore()
    }
}