var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	rectPos = width/2-1000;
	rectY = 605;
	 
     rectangle1 = createSprite(rectPos+100, rectY+40, 200,20);
	 rectangle1.shapeColor = "red";

	 bottomRect = Bodies.rectangle(rectPos+100, rectY+45-20, 200,20 , {isStatic:true} );
	 World.add(world, bottomRect);

	 rectangle2 = createSprite(rectPos, rectY, 20,100);
	 rectangle2.shapeColor = "red";

	 leftRect = Bodies.rectangle(rectPos+20, rectY, 20,100 , {isStatic:true} );
	 World.add(world, leftRect);

	 rectangle3 = createSprite(rectPos+200 , rectY, 20,100);
	 rectangle3.shapeColor = "red";

	 rightRect = Bodies.rectangle(rectPos+200-20 , rectY, 20,100 , {isStatic:true} );
	 World.add(world, rightRect);
	  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}