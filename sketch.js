const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(200,100,20,{restitution:0.1,friction:0.5,density:1.2});
	ball.image=loadImage("paper.png");
	World.add(world,ball);

    ground = Bodies.rectangle(0, height, 1600, 10 , {isStatic:true} );
	World.add(world, ground);
  
  

   dustPos =1200;
	 dustY = 640;
	
	 dustbasebody = Bodies.rectangle(dustPos+100, dustY+45-20, 250, 20, {isStatic:true});
	World.add(world, dustbasebody);

	dustbasebody.image=loadImage("dustbin.png");

	boxRightbody = Bodies.rectangle(dustPos+200, dustY+45-20, 20, 210, {isStatic:true});
	World.add(world,boxRightbody);
	
	Engine.run(engine);
  
}
 function draw() {
  //rectMode(CENTER);
  background(255);
  imageMode(CENTER);
  
  

  //ground.display();
  
  image(ball.image,ball.position.x,ball.position.y,70,70);
	  rect(ground.position.x,ground.position.y-5,1600,10);
  image(dustbasebody.image,dustbasebody.position.x,550,250,300);
 
  //drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:90,y:-105});
  
	}
}



