
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;



function setup() {
  createCanvas(1700, 700);
  engine = Engine.create();
  
  world = engine.world;

  var ground_option ={
    isStatic:true
  }

  ball = new Ball (200,500,20,20)

  ground=Bodies.rectangle(800,600,1700,40,ground_option)
  World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  
  rectMode(CENTER);
  background(0);
  fill("red")
  rect(ground.position.x,ground.position.y,1900,40)

  drawSprites();

  ball.display();
  
}



