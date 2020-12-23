const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground

function preload() {

}

function setup(){
    ground = new Ground(200,300,200,20);
    block1 = new Block(300,275,30,40)
    block2 = new Block(330,275,30,40)
    block3 = new Block(360,275,30,40)
    block4 = new Block(390,275,30,40)
    block5 = new Block(420,275,30,40)
    block6 = new Block(450,275,30,40)
    block7 = new Block(480,275,30,40)
    block8 = new Block(330,235,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11 = new Block(420,235,30,40)
    block12 = new Block(450,235,30,40)
    block13 = new Block(360,195,30,40)
    block14 = new Block(390,195,30,40)
    block15 = new Block(420,195,30,40)
    block16 = new Block(390,155,30,40)
}


function draw(){
    
}

function mouseDragged(){
   
}


function mouseReleased(){
   
}
