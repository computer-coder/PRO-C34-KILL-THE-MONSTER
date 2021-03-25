class Constraint{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        push();
        strokeWeight(5)
        fill('black');
        stroke('black');

        pop();
        
    }
    
}