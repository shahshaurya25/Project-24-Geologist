const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane, rubber;
var iron, stone, sand1, sand2, sand3, sand4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(1000, 350, 40);
    
    iron = new Iron(200, 120, 100, 100);
    stone = new Stone(800,320);
    
    sand1 = new Sand(700,260) 
    sand2 = new Sand(650,180) 
    sand3 = new Sand(600,120) 
    sand4 = new Sand(550,120) 
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();    
    iron.display();
    stone.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
}   