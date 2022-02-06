
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_option = { 
		isStatic : false,
		restitution : 0.3,
		friction : 0.2,
		desnsity : 1.2,

	}

	Bodies.circle(200,200,20,ball_option)
	World.add(world,ball);

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground (1100,600,20,120);
	rightSide = new ground (1200,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  
  
  drawSprites();
 
}



