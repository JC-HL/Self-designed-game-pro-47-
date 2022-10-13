const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bg;
var ground;
var ball, ball_img
var player, player_img, player_mov;
var computer, computer_img, computer_mov;

function preload(){
bg= loadImage("court.png");

player_mov= loadAnimation("player1.png", "player2.png", "player3.png", "player4.png")
player_img= loadImage("player1.png");

computer_mov= loadAnimation("computer1.png", "computer2.png", "computer3.png", "computer4.png")
computer_img= loadImage("computer1.png");

ball_img= loadImage("basketball.png");
}

function setup(){

  engine = Engine.create();
  world = engine.world;

  createCanvas(1000, 570)

  player = createSprite(300, 400, 100, 100)
  player.addAnimation("me", player_mov)
  player.addImage("player", player_img);
  player.changeImage("player")
  player.scale=0.7;


  computer= createSprite(700, 400, 100, 100);
  computer.addImage("AI", computer_img);
  computer.scale= 0.7;

  var ball_options={
    isStatic: true
    }
  ball= Bodies.circle(230, 360, 50, ball_options );
  World.add(world, ball);

  var ground_options={
  isStatic: true
  }
  ground= Bodies.rectangle(0, 600, 1000, 5, ground_options) ;
  World.add(world, ground)
}

function draw(){
  background("white");
  background(bg);
  Engine.update(engine);

  image(ball_img, ball.position.x, ball.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 1000, 20);


  if(keyDown(LEFT_ARROW)){
  player.x-=3
  } 

  if(keyDown(RIGHT_ARROW)){
    player.x+=3
    }

   
    

  

  drawSprites()
}

function keyPressed(){
  if(keyCode=== 32){
    player.changeAnimation("me");
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.1, y:-0.2})
  }
}

function keyReleased(){
  if(keyCode=== 32){
    player.changeImage("player");
  }
}