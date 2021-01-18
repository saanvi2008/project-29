const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8;
var polygon,sling1;

function preload(){

  polygonImg = loadImage("polygon.png");

}
function setup(){
  createCanvas(1200,600);

  engine = Engine.create();
  world  = engine.world;

  //Polygon Body
  fill("brown");
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling1 = new SlingShot(this.polygon,{x:100,y:200});


  ground1  = new Ground(600,height,2000,40);
  ground2  = new Ground(400,400,250,20);
  ground3  = new Ground(900,300,250,20);

  //level 1 of second ground
  
  
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(480,235,30,40);

  //level 2 of second ground
  block7 = new Box(360,135,30,40);
  block8 = new Box(390,135,30,40);
  block9 = new Box(420,135,30,40);
  block10 = new Box(450,135,30,40);

  //level 3 of second ground
  block11 = new Box(390,35,30,40);
  block12 = new Box(420,35,30,40);

  //level 1 of 3rd ground
  block13 = new Box(830,235,30,40);
  block14 = new Box(860,235,30,40);
  block15 = new Box(890,235,30,40);
  block16 = new Box(920,235,30,40);
  block17 = new Box(950,235,30,40);
  block18 = new Box(980,235,30,40);

  //level 2 of 3rd ground
  block19 = new Box(860,135,30,40);
  block20 = new Box(890,135,30,40);
  block21 = new Box(920,135,30,40);
  block22 = new Box(950,135,30,40);

  //level 3 of 3rd grounf
  block23 = new Box(890,35,30,40);
  block24 = new Box(920,35,30,40);
 
  
}

function draw(){
    background("violet");
    Engine.update(engine);

    
    ground1.display();
    ground2.display();
    ground3.display();

    sling1.display();
   
    strokeWeight(2);
    stroke("black");
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    fill("pink");
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    fill("magenta");
    block11.display();
    block12.display();

    fill("green");
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    fill("lightgreen");
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    fill("turquoise");
    block23.display();
    block24.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  
    strokeWeight(3);
    fill("red");
    textSize(20);
    text("DRAG THE HEXAGONAL STONE AND RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCKS",200,50);
    drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}
function mouseReleased(){

  sling1.fly();

}

