const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getTime();
}

function draw(){
    if(backgroundImg)
    background(backgroundImg)

    Engine.update(engine);
}

async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //console.log(response);

    var json=await response.json();
    console.log(json);
    var date=json.datetime
    console.log(date);

    var hour=date.slice(11,13);
    console.log(hour);

    if(hour>=6 && hour<7){
        bg=("sunrise1.png")
        textSize(20)
        fill("white")
        text("Time: 6 AM",50,100)
    }
    else if(hour>=7 && hour<8){
        bg=("sunrise2.png")
        textSize(20)
        fill("white")
        text("Time: 7 AM",50,100)
    }
    else if(hour>=8 && hour<9){
        bg=("sunrise3.png")
        textSize(20)
        fill("white")
        text("Time: 8 AM",50,100)
    }
    else if(hour>=9 && hour<10){
        bg=("sunrise4.png")
        textSize(20)
        fill("white")
        text("Time: 9 AM",50,100)
    }
    else if(hour>=10 && hour<11){
        bg=("sunrise5.png")
        textSize(20)
        fill("white")
        text("Time: 10 AM",50,100)
    }
    else if(hour>=11 && hour<12){
        bg=("sunrise6.png")
        textSize(20)
        fill("white")
        text("Time: 11 AM",50,100)
    }
    else if(hour>=12 && hour<13){
        bg=("sunset7.png")
        textSize(20)
        fill("white")
        text("Time: 12 PM",50,100)
    }
    else if(hour>=13 && hour<14){
        bg=("sunset8.png")
        textSize(20)
        fill("white")
        text("Time: 1 PM",50,100)
    }
    else if(hour>=14 && hour<15){
        bg=("sunset9.png")
        textSize(20)
        fill("white")
        text("Time: 2 PM",50,100)
    }
    else if(hour>=15 && hour<16){
        bg=("sunset10.png")
        textSize(20)
        fill("white")
        text("Time: 3 PM",50,100)
    }
    else if(hour>=16 && hour<17){
        bg=("sunset11.png")
        textSize(20)
        fill("white")
        text("Time: 4 PM",50,100)
    }
    else if(hour>=17 && hour<18){
        bg=("sunset12.png")
        textSize(20)
        fill("white")
        text("Time: 5 PM",50,100)
    }
    backgroundImg=loadImage(bg);
}
