const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var brick1;
var ball;
var ball1;
var ground;
var string;

function setup() {
  engine = Engine.create();
  world = engine.world;
  brick1 = new Block(500, 850);
  brick2 = new Block(500, 750);
  brick3 = new Block(500, 650);
  brick4 = new Block(500, 550);
  brick5 = new Block(600, 850);
  brick6 = new Block(600, 750);
  brick7 = new Block(600, 650);
  brick8 = new Block(700, 850);
  brick9 = new Block(700, 750);
  ball = new Ball(400, 500);
  ball1 = new Ball1(800, 700);
  ground = new Ground();
  string = new Constraint({ x: 300, y: 650 }, ball.body);
}
function draw() {
  createCanvas(1000, 1000);
  background("white");
  Engine.update(engine);
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick9.display();
  ground.display();
  ball.display();
  ball1.display();
  string.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
