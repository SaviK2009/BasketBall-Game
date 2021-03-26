var gameState = 0;

function preload()
{
	character1Img = loadImage("character1.png");
  character2Img = loadImage("character2.png");
  character3Img = loadImage("character3.png");
	npc = loadImage("NPC.png");
  ballImg = loadImage("ball.png");

}
function setup() {
	createCanvas(displayWidth, displayHeight-120);

	ground = createSprite(displayWidth/2, displayHeight-120, displayWidth, 20);
  
  box1 = createSprite(30, displayHeight/2, 60, 20);
  box2 = createSprite(70, displayHeight/2+40, 20, 100);
  box3 = createSprite(170, displayHeight/2+40, 20, 100);
  box4 = createSprite(2530, displayHeight/2+40, 60, 20);
  box5 = createSprite(2490, displayHeight/2+80, 20, 100);
  box6 = createSprite(2390, displayHeight/2+80, 20, 100);
  box7 = createSprite(2450, displayHeight/2+120, 100, 20);
  box8 = createSprite(110, displayHeight/2+80, 100, 20);
  
  ball = createSprite(displayWidth/2,  displayHeight/2, 50, 50);
  ball.addImage(ballImg);
  ball.velocityY=20
  
  pcplayer = createSprite(300, height-140, 50, 250);
  
  
  npcplayer = createSprite(displayWidth-350, displayHeight-270, 50, 50); 
  npcplayer.addImage(npc);
  npcplayer.scale = 0.2
  
  
  c1 = createSprite(displayWidth/2, displayHeight-250, 20,20)
  
  c2 = createSprite(displayWidth/2-300, displayHeight-250, 20,20)
  
  c3 = createSprite(displayWidth/2+300, displayHeight-250, 20,20)
  
  c1.addImage(character1Img)
  c1.scale = 1;
  
  c2.addImage(character2Img)
  c2.scale = 0.2;
  
  c3.addImage(character3Img)
  c3.scale = 1.5;
}


function draw() 
{
  background(0);
  if(gameState === 0)
  {


    fill("#008080")
    textSize(40);
    text("BasketBall AI game", displayWidth/2-220, displayHeight/2-600);

    fill("#93E9BE")
    textSize(25);
    text("Hey! Welcome to the virtual basketball game with AI! Here are the instructions:", displayWidth/2-300, displayHeight/2+50)
    
    textSize(25);
    text("-To move please use the arrow keys", displayWidth/2-300, displayHeight/2+90)
    
    textSize(25);
    text("-To jump use the spacebar. you can choose your players below. Got it?",displayWidth/2-300, displayHeight/2+130)
        
    textSize(24);
    text("To choose your character, click on the player you want!", displayWidth/2-300, displayHeight/2+200);
    
    box1.visible= false
    box2.visible= false
    box3.visible= false
    box4.visible= false
    box5.visible= false
    box6.visible= false
    box7.visible= false
    box8.visible= false
    ball.visible= false
    npcplayer.visible= false;
    pcplayer.visible= false;

  

    if(mousePressedOver(c1)){
      gameState=1;
      pcplayer.addImage(character1Img);
      pcplayer.scale = 1;      
    }
    if(mousePressedOver(c2)){
      pcplayer.addImage(character2Img)
      gameState=1
      pcplayer.scale = 0.2;      
    }
    if(mousePressedOver(c3)){
      pcplayer.addImage(character3Img)
      gameState=1
      pcplayer.scale = 1.5;      
    }
    
  }

  if(gameState === 1)
  {
    
    c1.visible= false
    c2.visible= false
    c3.visible= false

    box1.visible= true;
    box2.visible= true;
    box3.visible= true;
    box4.visible= true;
    box5.visible= true;
    box6.visible= true;
    box7.visible= true;
    box8.visible= true;
    ball.visible= true;
    npcplayer.visible= true;
    pcplayer.visible= true;
    
    edge = createEdgeSprites()
    pcplayer.collide(edge[3]);
    npcplayer.collide(ground);
    ball.collide(ground);
    
    if(keyDown(RIGHT_ARROW))
    {
      pcplayer.x += 30
    }

    if(keyDown(LEFT_ARROW))
    {
      pcplayer.x -= 30
    }

    if(keyDown(32) &&  pcplayer.y>=height-150)
    {
      pcplayer.velocityY = -40;
    }
    pcplayer.velocityY= pcplayer.velocityY+3

    if(pcplayer.isTouching(ball))
    {
      ball.velocityX=random(5,10);
      ball.velocityY=random(-5,-10);
    }

    npcplayer.velocityX=random(-6, -10);
    var invWall= createSprite(displayWidth/2, displayHeight/2, 10,height )
    invWall.visible=false;
    
    if(npcplayer.isTouching(invWall)){
      npcplayer.velocityX=random(6, 10);
    }
    
    if(npcplayer.isTouching(ball))
    {
      ball.velocityX=random(-5,-10);
      ball.velocityY=random(-5,-10);
    }
    

  }
  
  drawSprites();
 
}





