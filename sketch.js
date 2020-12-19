const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650, 800,5)

	dustbin = new Dustbin(500,600,30,100);
	
	paper = new Paper(100,600,7);

	Engine.run(engine);
}

function draw() {
  
  background("yellow");
  Engine.update(engine);
 
  paper.display();
  ground.display();
  dustbin.display();


  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y: 85});
  }
  
  drawSprites();
 
}