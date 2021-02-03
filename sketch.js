const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var gameState = "play", engine;
var gameState = "start";
var ground;
var dustbin;
var paper;
var engine;
function setup() {
  createCanvas(800, 400);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new Dustbin(740, 390, 100, 10);
  
  paper = new Paper(100, 300, 10, 10);
  
  ground = new Ground(width/2, 390, 50, 10,);
    
  }

function draw() {
 if(gameState === "play"){
  rectMode(CENTER);
  background(0);
  fill(255);
  stroke("white");
  textSize(20);
  text("Press 'UP ARROW' to throw the Garbage", 130, 230);
 }
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  
  if(gameState === "play"){
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();
    ground.display();
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
	Matter.Body.applyForce(paper.body, paper.body.position,{x:14, y: -14})
   {
   }
  }
}