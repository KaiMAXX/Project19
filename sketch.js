

var ship ,shipImg;

var space,spaceImg;

var score=0;

var obstaclesGroup;

var gameover,gameoverimage ;


var PLAY = 1;
var END = 0;
var gamestate = PLAY;

var obstacle1;
var obstacle2;

function preload(){
    spaceImg=loadImage("spaceBackdrop.jpg")
    
    shipImg = loadImage("super-ship1.png");
   
    obstacle1=loadImage("asteroid1.png");
    obstacle2=loadImage("transparent-shuriken1.png");

    gameoverimage=loadImage("gameover.png");
}

function setup() {
    space= createSprite(200,180,400,20);
    space.addImage("space",spaceImg);
    space.x=space.width/2;
    space.velocityY=10;

    obstaclesGroup=  new Group();
  
    ship = createSprite(630,500,200,200);
    ship.addImage("ship",shipImg);
    ship.scale=0.4;

    gameover=createSprite(windowWidth/2,height/2,50,50);
    gameover.addImage("Gameover",gameoverimage);
    gameover.visible=false;

}



function draw() {
    
    createCanvas(windowWidth,windowHeight);
    
    textSize(30);
    text("Score: "+ score, 400,400);
    
   
    ship.setCollider("rectangle", 0, 0, 500, 450,-90);
    ship.debug=false;
    
    if (gamestate===PLAY){
      score = score + Math.round(getFrameRate()/60);
      space.velocityY=10;
      ship.x = World.mouseX;
      // ship.bounceOff(edges[1]);
      // gameover.visibility=false;
      if(space.y > height ){
        space.y = height/2;

      }

      if (ship.isTouching(obstaclesGroup)){
        gamestate=END;
      }
  
    spawnObstacles();

    }   
else if(gamestate===END){
  
    obstaclesGroup.velocityY = 0;
    space.velocityY = 0;
    gameover.visible=true;
    
  }
 
drawSprites();

}



function spawnObstacles() {
    if (frameCount % 60 === 0) {
      var obstacle = createSprite (600,160,10,40);
      obstacle.x = Math.round(random(0,1000));
      obstacle.velocityY = 20;
      obstacle.scale=0.3;
      obstacle.setCollider("rectangle", 0, 0, 500, 450,-90);
    obstacle.debug=false;
      var rand = Math.round(random(1,2));
      switch (rand){
      case 1 : obstacle.addImage(obstacle1);
              break ;
      case 2 : obstacle.addImage(obstacle2);
               break;
            }
            obstacle.lifetime = 200 ;   
            obstaclesGroup.add(obstacle);
 
          
          }
        }





