class Star extends CelestialObject{
    constructor(x,y,size,color="yellow"){
        super(x,y)
        this.size=size
        this.color=color
        this.planets=[]
    }
    addPlanet(newPlanet){
        if(!newPlanet)return false
        this.planets.push(newPlanet)
        newPlanet.parent=this
        newPlanet.calculateDistanceToParent()
        return true
    }

    physics(time){
        for (const planet of this.planets) {planet.physics(time)}
    }
    show(){
        pushState()
        translate(this.position.x-canvasScroll.x,this.position.y-canvasScroll.y)
        fillEllipse(0,0,this.size,this.size,this.color)
        popState()
        for (const planet of this.planets) {
            planet.show()
        }
        
    }
    mapShow(){
        fillEllipse(this.position.x/10,this.position.y/10,this.size/10,this.size/10,this.color)
        for (const planet of this.planets) {
            planet.mapShow()
        }
    }
}