var mar;

var barquinho;

var fotoDoMar;

var fotoDoBarquinho;

function preload(){
  
  fotoDoMar = loadImage("sea.png");
  
  fotoDoBarquinho = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup(){

  createCanvas(400,400);

  background("blue");

  mar = createSprite(400,200);
  mar.addImage(fotoDoMar);
  mar.velocityX = -5;
  mar.scale = 0.3;

  
  barquinho = createSprite(130, 200, 30, 30);
  barquinho.addAnimation("movingShip", fotoDoBarquinho);
  barquinho.scale = 0.25;
  
}

function draw(){
  
  background(0);
  
  mar.velocityX = -3;

  if(mar.x < 0){
    mar.x = mar.width/8;
  }
    
  drawSprites();

}