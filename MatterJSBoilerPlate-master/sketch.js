
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
 
var tree, ground;

var stone,slingshot;

var boy;

var mango1,mango2,mango3,mango4,mango5;



function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1050,600,100,20);
	ground = new Ground(750,700,1500,20);
	stone = new Stone(240,550);
	slingshot = new SlingShot(stone.body,{x:240,y:550});
  boy = new Boy(800,600);
  mango1 = new Mango(1200,200,20,20);
  mango2 = new Mango(1300,300,20,20);
  mango3 = new Mango(1150,350,20,20);
  mango4 = new Mango(1400,250,20,20);
  mango5 = new Mango(1300,150,20,20);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  tree.display();
  ground.display();
  stone.display();
  slingshot.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === 32)
  {
    console.log("keyPressed")
    Matter.Body.setPosition(stone.body,{x:240,y:550})
    slingshot = new SlingShot(stone.body,{x:240,y:550});
  }
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    slingshot.fly();
}

function detectcollision(lstone,lmango)
{
   mangoBodyPosition=lmango.body.position;
   stoneBodyPosition=lstone.body.position;

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   
   if(distance<=60)
   {
     Matter.Body.setStatic(lmango.body,false)
   
   }

}  

