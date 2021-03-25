class Ground {
  constructor() {
    var options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(450, 890, 900, 20, options);
    World.add(world, this.body);
  }

  display() {
    push();
    fill("red");
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    rect(0, 0, 900, 5);
    pop();
  }
}
