
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3,ground1,paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	log1 = new Log(550,650,200,20);
	log1.shapeColor = "white";
	log2 = new Log(460,600,20,100);
	log2.shapeColor = "white";
	log3 = new Log(640,600,20,100);
	log3.shapeColor = "white";
	paper1 = new Paper(200,600,PI/2);
	ground1=new Ground(width/2, height-35, width,10);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 log1.display();
 log2.display();
 log3.display();
 ground1.display();
 paper1.display();
}



