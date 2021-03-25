class Ball {
    constructor(x,y) {
      var options= {
        restitution:0.1,
        friction:2,
        denstity:5
      }
      this.image=loadImage("hero.png")
      this.body= Bodies.circle(x,y,100,options)
      this.radius=300
      World.add(world,this.body)
    }
  
    display() {
      push();
      translate(this.body.position.x,this.body.position.y)
      imageMode(CENTER)
      image(this.image,0,0,this.radius,this.radius)
      pop();
    }
  }
  
  