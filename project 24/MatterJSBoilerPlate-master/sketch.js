
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(300,height,650,20);
	dustbin= new Dustbin(width/2,610,20,100);
	paper= new Paper(x,y,r);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  dustbin.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});
	}
}

