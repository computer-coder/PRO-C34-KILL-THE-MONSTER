class Block {
  constructor(x,y) {
    var options= {
      restitution:0.1,
      friction:2,
      denstity:5
     
    }
    
    this.body= Bodies.rectangle(x,y,50,50,options)
    World.add(world,this.body)
  }

  display() {
    push();
    fill('brown')
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    rect(0,0,50,50)
    pop();
  }
}

