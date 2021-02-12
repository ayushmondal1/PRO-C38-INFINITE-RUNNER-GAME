var canva;
var bgImg;
var spaceShip,SpaceShipImg;
function preload(){

    SpaceShipImg = loadImage("SpaceShipimg.png")
    bgImg = loadImage("bgImage.gif");
    jombiImage = loadImage("enemy.png");
}

function setup(){
  canvas = createCanvas(800,650);

  spaceShip = createSprite(350,550,100,100);
  spaceShip.addImage("SpaceShip",SpaceShipImg);
  spaceShip.scale=0.2;
  console.log(spaceShip.depth);

  jombiGroup = new Group();
  arrowGroup = new Group();
}
function draw(){
  background(225);

  if (keyDown("space")) {
    createArrow();
  }

  if(keyDown("right_arrow")){
    spaceShip.x = spaceShip.x + 3;
  }
  
  if(keyDown("left_arrow")){
    spaceShip.x = spaceShip.x - 3;
  }
  if(keyIsDown(UP_ARROW)){
    spaceShip.y = spaceShip.y - 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    spaceShip.y = spaceShip.y + 3;
  }
  if(arrowGroup.isTouching(jombiGroup)){
    jombiGroup.destroyEach();
    arrowGroup.destroyEach();
  }
  // if (jombiGroup.isTouching(arrow)){
  //   spaceShip.destroy();
  // } 
  //bullet1();
  jombi1();
  drawSprites();

  
}
function jombi1(){
   if (frameCount % 50 === 0){
  jombi = createSprite(500,100,10,10);
  jombi.addImage(jombiImage);
  jombi.x=Math.round(random(50,700));
  //jombi.scale=0.1;
  jombi.velocityY = +5; 
  jombi.lifetime = 200;
  jombi.debug = true
  jombi.setCollider("rectangle",0,0,80,50);
  jombiGroup.add(jombi);
  }}
  
  // function bullet1(){
  //  bullet = createSprite(500,100,10,10);
  //  bullet.addImage(jombiImage);
  //  bullet.x=Math.round(random(50,700));
  //  bullet.scale=1;
  //  //bullte.x=bullte.x

  //  bullet.velocityY = +5; 
  //  bullet.lifetime = 200;
  //  bullet.debug = true
  //  bullet.setCollider("rectangle",0,0,80,50);
  //  bulletGroup.add(bullet);
   
  // }
 /* function createArrow() {
    arrow= createSprite(480, 100, 5, 10);
    arrow.velocityY = -6;
    arrow.scale = 0.2;
    return arrow;
  }*/

  function createArrow() {
    var arrow= createSprite(100, 100, 60, 10);
    arrow.addImage(jombiImage);
    arrow.x = 360;
    arrow.x=spaceShip.x;
    arrow.y=spaceShip.y;
    arrow.velocityY = -4;
    arrow.lifetime = 100;
    arrow.scale = 0.3;
    //return arrow;
    arrowGroup.add(arrow);

  }  