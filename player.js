class Player{
    constructor(x,y,direction){
        this.x=x
        this.y=y
        this.direction=direction
    }
    move(dirX,dirY){
        return angle({x:this.x,y:this.y},{x:dirX,y:dirY})
    }

    

    show(){
        c.save()
        c.translate(this.x,this.y)
        c.rotate(this.direction)
        rect(-2,-10,4,5,"white")
        rect(-5,-5,10,10,"white")
        c.restore()
    }
}