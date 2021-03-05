var player1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	player1 = loadAnimation("character1.png");
}
function setup() {
	createCanvas(displayWidth, displayHeight-190);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = new Ground(displayWidth/2, displayHeight-210, displayWidth, 100 , {isStatic:true} );
	box1 = new Box(30, displayHeight/2, 60, 20);
	box2 = new Box(70, displayHeight/2+40, 20, 100);
	box3 = new Box(150, displayHeight/2+40, 20, 100);
	box4 = new Box(2530, displayHeight/2+40, 60, 20);
	box5 = new Box(2490, displayHeight/2+80, 20, 100);
	box6 = new Box(2410, displayHeight/2+80, 20, 100);
	pcplayer = new Box(300, displayHeight/2+260, 50, 400);
	image(player1, pcplayer.body.position.x, pcplayer.body.position.y)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  pcplayer.display();
  drawSprites();
 
}



