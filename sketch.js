var pathImg, path
var runner1Img
var runner2

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner1Img = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(1000,700);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImg);
// path.y = path.width /2;



}

function draw() {
  background(0);
  path.velocityY = 2
  if (path.y > 400){
  path.y = path.height/2; 

  }
  
  drawSprites();
}
