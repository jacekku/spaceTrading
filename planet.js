class Planet{
    constructor(x,y,size,type){
        this.x=x
        this.y=y
        this.size=size
        this.type=type
        this.rotation=0
        this.rotationSpeed=0.005
        this.moon=null
        this.color=this.type=="planet"?"green":"gray"
    }
    show(){
        if(this.type=="moon"){
            c.fillStyle=this.color
            c.beginPath()
            c.ellipse(this.size*10,0,this.size,this.size,0,0,Math.PI*2)
            c.fill()
        }
        else{
        c.save()
        c.translate(this.x-canvasScroll.x,this.y-canvasScroll.y)
        c.rotate(this.rotation)
        c.fillStyle=this.color
        c.beginPath()
        c.ellipse(0,0,this.size,this.size,0,0,Math.PI*2)
        c.fill()
        //  rect(-this.size/2,-this.size/2,this.size,this.size,"green")
        if(this.moon)this.moon.show()
        c.restore()
        }
        
    }
    rotate(){
        this.rotation+=this.rotationSpeed
    }
    createMoon(x,y,size,type){
        this.moon=new Planet(this.x-x,this.y-y,size,type)
    }
}