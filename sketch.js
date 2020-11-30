
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1,box2,box3;
var paper1, dustbin1;

function preload()
{
	paper1 = loadImage("paper.png");
	dustbin1 = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

		

	//Create the Bodies Here.
	 paper = new Paper(50,600,20);
	 paper1.addImage(paper1Image);
	 ground = new Ground(400,680,800,10);
	 box1 = new Box(655,650,150,15);
	 dustbin1.addImage("dustbingreen.png");
	 box2 = new Box(725,595,15,125);
	 dustbin1.addImage("dustbingreen.png");
	 box3 = new Box(585,595,15,125); 
	 dustbin1.addImage("dustbingreen.png");


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){


	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});

	}
}

 



