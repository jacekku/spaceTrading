class Moon extends CelestialObject{
    constructor(x,y,size,color="gray"){
        super(x,y)
        this.size=size
        this.color=color
        this.parent
        this.distanceFromParent
    }

    physics(time){
        this.position.x=
        Math.round(Math.cos(time)*this.distanceFromParent)
        +this.parent.position.x
        this.position.y=
        Math.round(Math.sin(time)*this.distanceFromParent)
        +this.parent.position.y
    }
    calculateDistanceToParent(){
        this.distanceFromParent=
        (this.position.x-this.parent.position.x)
    }

    show(){
        pushState()
        translate(this.position.x-canvasScroll.x,this.position.y-canvasScroll.y)
        fillEllipse(0,0,this.size,this.size,this.color)
        popState()
    }
    mapShow(){
        fillEllipse(this.position.x/10,this.position.y/10,this.size/10,this.size/10,this.color)
    }
}