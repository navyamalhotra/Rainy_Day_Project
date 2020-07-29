const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var man, rain, storm, image1;
var ball = [];
var engine, world, rand; 
var invisibleBall;

function preload(){
    image1 = loadImage("girl.jpg");
}

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    invisibleBall = new umbrella();
//image(image1,200,300);
  //ball = [];
 // rand = random(20,780);
  }
    

function draw(){
    background("white");
    Engine.update(engine);
    image(image1,20,270,500,500);
    for(var p = 0; p < ball.length;p++) {
      ball[p].display();
        }
    if(frameCount%1===0) {
      ball.push(new inviBall);
  }
  //invisibleBall.display();
 
   // ball.display();
    //man.display();
}   

