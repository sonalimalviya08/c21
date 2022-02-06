
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(700, 600);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper = new Paper(260,100,20);

 ground = new Ground(400,580,800,20);

 leftSide = new Dustbin(550,520,20,100);
 bottom = new Dustbin(610,560,100,20);
 rightSide = new Dustbin(670,520,20,100);

	
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);

  background(0);

  
  
  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();
 
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  //Matter.Body.setStatic(paper.body,false)
	Matter.Body.appyForce(paper,paper.position, {x:85, y: -85})

 }
}



