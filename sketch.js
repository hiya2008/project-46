var balloon , balloon_img ; 
var bg , bg_img ; 
var Bground ;
var Tground ;
var obsTop1 , obsTop2 ;
var obsBot1 , obsBot2 , obsBot3 ; 

function preload(){
  bg_img = loadImage("assets/bg.png");
  balloon_img = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
  obsTop1 = loadImage("assets/obsTop1.png");
  obsTop2 = loadImage("assets/obsTop2.png");
  obsBot1 = loadImage("assets/obsBottom1.png");
  obsBot2 = loadImage("assets/obsBottom2.png");
  obsBot3 = loadImage("assets/obsBottom3.png");
}

function setup (){
  createCanvas(400,400);

  bg = createSprite(165,485,1,1);
  bg.addImage(bg_img);
  bg.scale = 1.3 ;

  balloon = createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloon_img);
  balloon.scale = 0.2 ;

  Bground = createSprite(200,390,800,20);
  Bground.visible = false ; 

  Tground = createSprite(200,10,800,20);
  Tground.visible = false ;

}

function draw (){
  background("black");
  
if(keyDown("space")){
  balloon.velocityY = -5
}
 balloon.velocityY = balloon.velocityY+2

  spawnObstaclesTop();
  drawSprites();

}
function spawnObstaclesTop() {
  if(frameCount % 60 === 0) {
    obstacleTop = createSprite(400,50,40,50);
    obstacleTop.addImage(obsTop1);
    obstacleTop.scale = 0.1 ;
    obstacleTop.velocityX = -4 ;
    obstacleTop.y = Math.round(random(10,100));
    var rand = Math.round(random(1,2));
    switch (rand) {
      case 1 : obstacleTop.addImage(obsTop1);
 
        break;
      case 2 : obstacleTop.addImage(obsTop2);

        break;

      default: 

        break;
    }

  }
}