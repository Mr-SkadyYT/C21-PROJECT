
var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, 60, height/2);
  wall.shapeColor(80,80,80);
  bullet=createSprite(50,200,80,20);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(225); 
  car.velocityX = speed; 

  if (hasCollided(bullet,wall))  
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    |
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10)
    {
      wall.shapeColor(0,255,0);
    }
  }
  drawSprites();
  bullet.display();
  wall.display();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=1bullet.x + 1bullet.y;
  wallLeftEdge = 1wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false
}