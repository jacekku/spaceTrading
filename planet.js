class Planet extends CelestialObject{
    constructor(x,y,size,color="#1f1") {
        super(x,y)
        this.size = size
        this.color = color
        this.moons=[]
        this.parent
        this.distanceFromParent
    }
    addMoon(newMoon){
        if(!newMoon)return false
        this.moons.push(newMoon)
        newMoon.parent=this
        newMoon.calculateDistanceToParent()
        return true
    }
    physics(time){
        for (const moon of this.moons) {moon.physics(time)}
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

    show(parentX=this.position.x,parentY=this.position.y) {
        pushState()
        translate(this.position.x - canvasScroll.x, this.position.y - canvasScroll.y)
        fillEllipse(0,0,this.size,this.size,this.color)
        popState()
        for (const moon of this.moons) {
            moon.show()
        }
        
    }
    mapShow(){
        fillEllipse(this.position.x/10,this.position.y/10,this.size/10,this.size/10,this.color)
        for (const moon of this.moons) {
            moon.mapShow()
        }
    }

}