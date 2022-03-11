
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

let engine;
let world;
var ball,ball1
var ground,ground1

function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ball_options={restitution:0.95,frictionAir:0.01}
ball=Bodies.circle(100,10,20,ball_options)
World.add(world,ball)

var ground_options={isStatic:true}
ground=Bodies.rectangle(200,390,400,25,ground_options);
World.add(world,ground)

var ball1_options={restitution:0.85}
ball1=Bodies.circle(150,26,23,ball1_options)
World.add(world,ball1)

ground1=Bodies.rectangle(50,200,200,25,ground_options);
World.add(world,ground1)

con=Matter.Constraint.create({
  pointA:{x:200,y:20},
  bodyB:ball,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1
  })
  World.add(world,con)
}

function draw() 
{
  background(51);
 Engine.update(engine)

 ellipse(ball.position.x,ball.position.y,20)
rect( ground.position.x,ground.position.y,400,25)
 ellipse(ball1.position.x,ball1.position.y,23)
rect(ground1.position.x,ground1.position.y,200,25)

push ();
strokeWeight(2);
stroke(255)
 line (con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
 pop ()
}

function keyPressed(){
  if(keyCode==RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

  }
}

