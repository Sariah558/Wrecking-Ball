const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
 ground = new Ground(600,600,1200,20);
   
    
}

function draw(){
    background(0);
   Engine.update(engine);
   
    ground.display();
   
}