
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var bin1, bin2, bin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background("black")


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,590,800,15)
	ball = new Paper(50,300,17)

	bin1 = new Dustbin(625,588,210,10)
	bin2 = new Dustbin(525,533,10,100)
	bin3 = new Dustbin(725,533,10,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display()
  ball.display()

  bin1.display()
  bin2.display()
  bin3.display()
 
}

function keyPressed() 
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.1,y:-0.5})
	}
}



