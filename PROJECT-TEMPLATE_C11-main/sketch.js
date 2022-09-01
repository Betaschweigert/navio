var shipImg;
var ceu;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
createCanvas(400,400);

 ceu = createSprite(400,200)
 ceu.addAnimation("sea",seaImg)
ceu.scale = 0.3


barco = createSprite(100,200)
barco.addAnimation("ship",shipImg );
barco.scale = 0.3


}

function draw() {
  background("blue");
    drawSprites();

    if(ceu.x < 0){
      ceu.x = ceu.width/8;
    }
    
    ceu.velocityX = -5
}
