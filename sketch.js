
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var boy ;
var stoneObj;
var boyImage,boyD
var launchingForce=100;
var tree1;

function preload()
{
 boyImage=loadImage("boy.png");		
}

function setup() {
	createCanvas(1250, 400);
	engine = Engine.create();
	world = engine.world;
	tree1=new tree(1010,190,500,400)
	ground= new Ground(1100,410,10000,50);
	mango1=new mango(1100,100,20);
  mango2=new mango(1170,130,20);
	mango3=new mango(1010,140,20);
	mango4=new mango(1000,70,20);
	mango5=new mango(1130,70,20);
	mango6=new mango(1100,30,20);
	mango7=new mango(1020,20,20);
	mango8=new mango(1070,40,20);
	mango9=new mango(1050,30,20);
	mango10=new mango(1350,30,20);
	mango11=new mango(1300,50,20);
	mango12=new mango(13000,40,20);
	stoneObj=new stone(200,200,20,20);
	boy=new Boy(stoneObj.body,{x:150,y:300})
	boyD=createSprite(200,350,20,20)
	boyD.addImage("boyI",boyImage);
	boyD.scale=0.09

	//boy=new Boy(stoneObj.body,{x:235,y:420});
	//boy=new Boy(stoneObj.body,"test");
	//boy.addImage("boyI",boyImage);
	//var render = Render.create({
	//	element: document.body,
	//	engine: engine,
	//	options: {
		//  width: 1300,
		//  height: 600,
		 // wireframes: false
		//}
	  //});
	Engine.run(engine);
  
}


function draw() {
	//alert("Inside deraw")
  rectMode(CENTER);
  background(230);
 //image(boyImage ,200,340,200,300);

  ground.display();
  //boy.display();
  tree1.display();
  mango1.display();
  mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	stoneObj.display();
	boy.display();
	
	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);
	detectollision(stoneObj,mango6);
	detectollision(stoneObj,mango7);
	detectollision(stoneObj,mango8);
	detectollision(stoneObj,mango9);
	detectollision(stoneObj,mango10);
	detectollision(stoneObj,mango11);
	detectollision(stoneObj,mango12);

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	boy.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	 boy.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

