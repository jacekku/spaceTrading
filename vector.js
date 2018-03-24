class Vector2D {
    constructor(x = 0, y = 0) {
        if (typeof x == "object") {
            this.x = x.x
            this.y = x.y
        } else {
            this.x = x
            this.y = y
        }
    }
    set(x,y){
        this.x=x
        this.y=y
        return true
    }
    multiply(scalar) {
        return new Vector2D(this.x * scalar,this.y * scalar)
    }
    divide(scalar) {
        return new Vector2D(this.x / scalar,this.y / scalar)
    }
    equals(vector){
        return this.x==vector.x && this.y==vector.y
    }
    subtract(vector) {
        return this.add({
            x: -vector.x,
            y: -vector.y
        })
    }
    add(vector) {
        return new Vector2D(this.x + vector.x, this.y + vector.y)
    }
    dotProduct(vector) {
        return (this.x * vector.x) + (this.y * vector.y)
    }
    length() {
        return Math.sqrt(this.dotProduct(this, this))
    }
    angle(vector) {
        return this.dotProduct(this, vector) / (this.length() * vector.length())
    }
    moveTowards(vector, maxDistanceDelta) {
        let a = new Vector2D(this.subtract(vector))
        let magnitude = a.length()
        
        if (magnitude <= maxDistanceDelta || magnitude == 0) {
            //V dont do this V it passes a reference -.-
            //return vector
            
            //this works, YaY!
            return new Vector2D(vector)
        }
        a=a.divide(magnitude).multiply(maxDistanceDelta)
        return this.subtract(a)
    }

}