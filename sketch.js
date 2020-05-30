//var movingrect,fixedrect,runningrect;
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1000,200,60,400);
  wall.shapeColor = "red"
  car = createSprite(50,200,50,50);
  car.velocityX = 10;
  speed = random(55,90);
  weight = random(400,1500);
 //fixedrect= createSprite(200, 100, 50, 50);
 //movingrect= createSprite(400,200,50,50);
 //runningrect = createSprite(200,300,50,40);
 //fixedrect.velocityY= 5;
 //runningrect.velocityY= -5;
 //fixedrect.shapeColor = "red";
 
}

function draw() {
  background(255,255,255);  
  //movingrect.x = mouseX;
  //movingrect.y = mouseY;
//bounceOff(fixedrect,runningrect)
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed;
    if(deformation<100){
      car.shapeColor=("0,255,0");
    }
    if(deformation>100&&deformation<180){
      car.shapeColor=("230,230,0");
    }
    if(deformation>180){
      car.shapeColor=("255,0,0");
    }
  }

  
   
  
    
      
    
  drawSprites();
}
