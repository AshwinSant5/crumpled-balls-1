
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Paper (200,450,40);
ground = new Ground(800,680, 1600,20);
bin1 = new Bin (950,640,10,60);
bin2 = new Bin (1000,670,100,10);
bin3 = new Bin (1050,640,10,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ball.display();
 ground.display();
 bin1.display();
 bin2.display();
 bin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:-85});
	}
}


