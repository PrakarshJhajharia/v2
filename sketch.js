const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var song;
var button;
var sound;
var sound1;
/*
function setup() {
  createCanvas(200, 200);
  song = loadSound('rainbow.mp3', loaded);
  button = createButton('play');
  button.mousePressed(togglePlaying);
  background(51);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('pause');
  } else {
    song.stop();
    button.html('play');
  }
}

function loaded() {
  console.log('loaded');
}
*/
var pra = 0;
var pri = 0;
var  a;
var wer = 0;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var level = 1;
var gameState = "onSling";
var bg = "sprites/background2.jpg";
var score = 0;
var invi,inv,invis;
var reset;
var res;
var c = 0;
var opt;
var lev = 100;
var dis = 0;
var le = 0;
var tw = 0;
var pt = 0;
var pi = 0;
var ps = 0;
var bier = 0;
var ar = 0;
var arn = 0;
var arna = 0;
var arnav = 0;
function preload() {
    getBackgroundImg();
    backgroundImg = loadImage(bg);
    song = loadSound('file.mp3', loaded);
    sound = loadSound('file2.mp3', loaded);
    sound1 = loadSound('file1.mp3', loaded);
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    
    world = engine.world;

    reset = new Reset(150,30,50,50)
    bird = new Bird(200,200);
    slingshot = new SlingShot(bird.body,{x:150, y:180});
   
    platform = new Platform(200, 680, 500, 800);
    invi = new Invisible(200,400,100,10)
   
    

   /*
   //LEVEL 1
    box53 = new Box(810,285,70,70);
    box5 = new Box(810,365,70,70);
    pig1 = new Pig(920, 400);
    pig2 = new Pig(700, 400);
    pig11 = new Pig(920, 295);
    pig21 = new Pig(700, 295);
    pig12 = new Pig(920, 215);
    pig22 = new Pig(700, 215);
    box52 = new Box(810,205,70,70);
    log2 = new Log(810,10,350,PI/2)
    log1 = new Logy(650,320,70, PI);
   log11 = new Logy(650,250,65, PI);
   log111 = new Logy(650,120,60, PI);
   log1111 = new Logy(650,50,60, PI);
   log11111 = new Logy(970,320,70, PI);
   log111111 = new Logy(970,250,65, PI);
   log1111111 = new Logy(970,120,60, PI);
   log11111111 = new Logy(970,50,60, PI);
   log5 = new Log(810,330,270, PI/2);
   log51 = new Log(810,240,270, PI/2);

   */
  /*
  //LEVEL 2
    box1 = new Box(650,320,70,70);
    box2 = new Box(970,320,70,70);
    pig1 = new Pig(920, 400);
    log1 = new Log(910,260,195, PI/2);
   
   log12 = new Log(705,260,210, PI/2);
    pig2 = new Pig(700, 400);
    box3 = new Box(720,240,70,70);
    box4 = new Box(900,240,70,70);
   pig3 = new Pig(810, 220);
    box6 = new Box(810,320,70,70)
    log3 =  new Log(810,180,260, PI/2);

    box5 = new Box(810,160,70,70);
   
   tri = new Triangle(655,240,70,-PI/2)
    tri1 = new Triangle(950,240,65,0)
    tri3 = new Triangle(740,160,70,-PI/2)
    tri2 = new Triangle(885,160,65,0)
*/
/*
//LEVEL 3
  box1 = new Boxy(650,320,70,70);
  box2 = new Boxy(970,320,70,70);
  pig1 = new Boxy(900, 390,70,70);
  log1 = new Log(810,260,400, PI/2);

  pig2 = new Boxy(720, 390,70,70);
  box3 = new Boxy(720,240,70,70);
  box4 = new Boxy(900,240,70,70);
 pig3 = new Pig(810, 400);
  box6 = new Boxy(810,210,70,70)
  log3 =  new Log(810,180,260, PI/2);

 
 tri = new Triangle(655,240,70,-PI/2)
  tri1 = new Triangle(950,240,65,0)
*/



}

function draw(){
    if(ar == 1 && arna != 1){
        sound1.play();    
        sound1.setVolume(2)   
        arna = 1;
        arn = 0;
            arnav = 0;
            console.log('dragged')
       }
    if(arn == 1 && arnav!= 1){
    sound1.stop();
    sound.play(); 
    sound.setVolume(2)   
    ar = 0;
    arnav = 1;
    arna = 0;
    console.log('released')
   }
   if(pri == 1 && pra != 1){
    song.loop();
    song.setVolume(0.5)
    pra = 1;
    console.log('main')
}
   // 
    if(bier == 1) {
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
     }   
     if(bier == 1) {
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
     }   
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text( score, 1100, 50)
    
    Engine.update(engine);
    strokeWeight(4);
   
   
   
   
   if(lev == 100){
    tw = tw + 0.25

   }
   
   if(tw == 100){
    lev = 200
    tw = 100
    pt = pt + 4
    bg = "sprites/level 1.jpg";
    backgroundImg = loadImage(bg);

}
   
   if(pt == 100){
       lev = 1;
       pt = 1000
       score = 0;
       tw = 1000;
       bg = "sprites/backgroundmain.jpg";
       backgroundImg = loadImage(bg);
       console.log(bg)

   }
   
   
   
   
    
    
     if(score == 1200 ){
        lev = 2;
    }
    else if(score == 1800 ){
        lev = 3;
    }
    else if(score == 2000){
        lev = 4;
    }
    else if(score == 3000 && lev != 6){
        lev = 5;
    }
    else if(score == 3800){
        lev = 7;
    }
    else if(score == 4400){
        lev = 8;
    }
    else if(score == 5000){
        lev = 9;
    }
    else if(score == 6000){
        lev = 10;
    }


    if(lev ==  1 && le!=1){
        gameState = "onSling";
        ground = new Ground(850,500,550,200);
        inv = new Invisible(840,420,430,20)
        invis = new Invisible(630,470,100,100)
        
           //LEVEL 1
    box53 = new Box(810,285,70,70);
    box5 = new Box(775,365,70,70);
    box100 = new Box(850,365,70,70);
    pig1 = new Pig(920, 400);
    pig2 = new Pig(700, 400);
    pig11 = new Pig(920, 295);
    pig21 = new Pig(700, 295);
    pig12 = new Pig(920, 215);
    pig22 = new Pig(700, 215);
    box52 = new Box(810,205,70,70);
    log2 = new Log(810,10,380,PI/2)
    log1 = new Logy(630,195,140, PI);
  
   log1111 = new Logy(630,80,120, PI);
   
   log1111111 = new Logy(990,195,140, PI);
   log11111111 = new Logy(990,80,120, PI);
   log5 = new Log(810,330,270, PI/2);
   log51 = new Log(810,240,270, PI/2);
        le = 1;
   
    dis = 1;
    
    
    }
    
    if(lev == 2 && le!=2){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200, y:200});
        slingshot.attach(bird.body);    
        gameState = 'onSling';
       
        box100.destroy();
        box53.destroy();
        box5.destroy();
        pig1.destroy();
        pig2.destroy();
        pig11.destroy();
        pig21.destroy();
        pig12.destroy();
        pig22.destroy();
        box52.destroy();
        log2.destroy();
        log5.destroy();
        log51.destroy();
        log1.destroy();
       
        log1111.destroy();
        
        log1111111.destroy();
        log11111111.destroy();
       
        //LEVEL 2
    box1 = new Box(650,380,70,70);
    box2 = new Box(970,380,70,70);
    pig1 = new Pig(910, 400);
    log1 = new Log(10895,260,195, PI/2);
   
   log12 = new Log(810,260,400, PI/2);
    pig2 = new Pig(700, 400);
    box3 = new Box(720,240,70,70);
    box4 = new Box(900,240,70,70);
   pig3 = new Pig(810, 250);
    box6 = new Box(810,380,70,70)
    log3 =  new Log(810,180,260, PI/2);

    box5 = new Box(810,160,70,70);
   
   tri = new Triangle(655,240,70,-PI/2)
    tri1 = new Triangle(950,240,65,0)
    tri3 = new Triangle(740,160,70,-PI/2)
    tri2 = new Triangle(885,160,65,0)

        
        le = 2;
        dis = 2;
    }

    if(lev == 3 && le!=3){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200, y:200});
        slingshot.attach(bird.body);    
        gameState = 'onSling';
        
        box1.destroy();
        box2.destroy();
        pig1.destroy();
        log1.destroy();
        log12.destroy();
        pig2.destroy();
        box3.destroy();
        box4.destroy();
        pig3.destroy();
        box6.destroy();
        log3.destroy();
        box5.destroy();
        tri.destroy();
        tri1.destroy();
        tri2.destroy();
        tri3.destroy();

        //LEVEL 3
  box1 = new Boxy(650,320,70,70);
  box2 = new Boxy(970,320,70,70);
  pig1 = new Boxy(900, 390,70,70);
  log1 = new Log(810,260,400, PI/2);

  pig2 = new Boxy(720, 390,70,70);
  box3 = new Boxy(720,240,70,70);
  box4 = new Boxy(900,240,70,70);
 pig3 = new Pig(810, 400);
  box6 = new Boxy(810,210,70,70)
  log3 =  new Log(810,180,260, PI/2);

 
 tri = new Triangle(655,240,70,-PI/2)
  tri1 = new Triangle(950,240,65,0)

        le = 3;
        dis = 3;
    }
if(lev == 4 && le!= 4){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200, y:200});
    slingshot.attach(bird.body);    
    gameState = 'onSling';

   box1.destroy();
    box2.destroy();
    pig1.destroy();
    log1.destroy();
    pig2.destroy();
    box3.destroy(); 
    box4.destroy();
    pig3.destroy();
    box6.destroy();
    log3.destroy();
    tri.destroy();
    tri1.destroy();

    pig1 = new Pigy(810,350)
    dis =4;
    le = 4;
}

if(lev == 5 & le!= 5){
        pig1.destroy();
        ground.destroy();
        bg = "sprites/level 2.jpg";
        backgroundImg = loadImage(bg);
        dis =5
        pi = 1;
        le = 5;
        ps = 0;
    }
    if(lev == 6){
        pi = 2;
    }
    if(pi == 1){
    ps = ps+0.25
    console.log('hello')
    
}
if(ps == 100){
    bg = "sprites/backgroundmain.jpg";
    backgroundImg = loadImage(bg);
    pi =2;
    ps = 1000;
    lev = 6

}
if(lev == 6 && le!=6){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200, y:200});
    slingshot.attach(bird.body);    
    gameState = 'onSling';
    invis.destroy();
    inv.destroy();
    pig22 = new Pig(600, 215);
   invisibl = new Invisible(950,495,300,10)
   box53 = new Box(525,275,70,70);
   box52 = new Box(530,205,70,70);
    box31 = new Box(670,205,70,70)
    box5 = new Box(670,275,70,70);
  
    log2 = new Log(600,235,210,PI/2)
    log5 = new Log(600,155,210, PI/2);
    pig11 = new Pig(600, 130);
    box30 = new Box(670,120,70,70)
    box32 = new Box(530,120,70,70)
    log11111111 = new Log(600,50,210, PI/2);
   ground1 = new Ground(650,350,400,150);
    ground2 = new Ground(1000,550,400,150);
    invisi = new Invisible(600,285,350,10)
    invisib = new Invisible(425,325,10,90)
     pig21 = new Pig(950, 360);
    pig12 = new Pig(950, 280);
    loga = new Log(950,425,210,PI/2)
    logab = new Log(950,325,210,PI/2)
    logac = new Log(950,265,210,PI/2)
   boxa = new Box(1020,430,70,70)
   boxab = new Box(1020,350,70,70)
   boxac = new Box(1020,270,70,70)
   boxad = new Box(880,430,70,70)
   boxae = new Box(880,350,70,70)
   boxaf = new Box(880,270,70,70)
    dis = 6;
    le = 6;
}
if(lev == 7 && le!=7){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200, y:200});
    slingshot.attach(bird.body);    
    gameState = 'onSling';
    pig22.destroy();
    box53.destroy();
    box52.destroy();
    box31.destroy();
    box5.destroy();
  
    log2.destroy();
    log5.destroy();
    pig11.destroy();
    box30.destroy();
    box32.destroy();
    log11111111.destroy();
    pig21.destroy();
    pig12.destroy();
    loga.destroy();
    logab.destroy();
    logac.destroy();
    boxa.destroy();
    boxab.destroy();
    boxac.destroy();
    boxad.destroy();
    boxae.destroy();
    boxaf.destroy();

    pig22 = new Pig(600, 215);
    box53 = new Box(535,275,70,70);
 box5 = new Box(670,275,70,70);
    pig11 = new Pig(600, 280);
  
     log11 = new Log(600,245,210, PI/2);
     tri1 = new Triangle(655,240,70,0)
     tri4 = new Triangle(1010,400,65,0)
     tri3 = new Triangle(530,160,70,-PI/2)
     tri2 = new Triangle(870,400,65,0-PI/2)
    
     
     pig21 = new Pig(950, 380);
     
     loga = new Log(950,425,210,PI/2)
    
    boxa = new Box(1020,430,70,70)
   
    boxad = new Box(880,430,70,70)
    dis = 7;
    le = 7;
}
if(lev == 8 && le!=8){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200, y:200});
    slingshot.attach(bird.body);    
    gameState = 'onSling';
    pig22.destroy();
    box53.destroy();
    box5.destroy();
    pig11.destroy();
    log11.destroy();
    tri1.destroy();
    tri2.destroy();
    tri3.destroy();
    tri4.destroy();
    pig21.destroy();
    loga.destroy();
    boxa.destroy();
    boxad.destroy();
    pig22 = new Pig(880, 400);
   
   box53 = new Box(535,275,70,70);

    box5 = new Box(670,275,70,70);
   
  
    pig11 = new Pig(1020, 400);
 
    log11 = new Log(600,245,210, PI/2);
    tri1 = new Triangle(655,240,70,0)
  
    tri3 = new Triangle(530,160,70,-PI/2)

   tri2 = new Box(1020,400,70,70)
   tri4 = new Box(880,400,70,70)
    pig21 = new Pig(950, 380);
    
    loga = new Log(950,425,210,PI/2)
   
   boxa = new Box(1020,430,70,70)
  
   boxad = new Box(880,430,70,70)
    dis = 8;
    le = 8;
}
if(lev == 9 && le!=9){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200, y:200});
    slingshot.attach(bird.body);    
    gameState = 'onSling';

    pig22.destroy();
    box53.destroy();
    box5.destroy();
    pig11.destroy();
    log11.destroy();
    tri1.destroy();
    tri2.destroy();
    tri3.destroy();
    tri4.destroy();
    pig21.destroy();
    loga.destroy();
    boxa.destroy();
    boxad.destroy();

    pig2 = new Pigy(600,250)
    dis = 9;
    le = 9;
}
if(lev == 10){
    bg = "sprites/background.jpg";
    backgroundImg = loadImage(bg);
    dis = 10;
    le = 10;

}
    if(dis == 1){

        //LEVEL1
   
    box52.display();
    box53.display();
    
    log1111.display();
    box100.display();
    log11111111.display();
    log1111111.display();
    log1.display();
    log2.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig11.display();
    pig11.score();
    pig21.display();
    pig21.score();
    pig12.display();
    pig12.score();
    pig22.display();
    pig22.score();
    box5.display();
    log5.display();
    log51.display();

    }

    if(dis == 2){
        //LEVEL 2
     box1.display();
     box2.display();
     log12.display();
     tri.display();
     tri2.display();
     tri3.display();
     tri1.display();
     log1.display();
     pig1.display();
     pig1.score();
     pig2.display();
     pig2.score();
     box3.display();
     box4.display();
     pig3.display();
     pig3.score();
     log3.display();
    log1.display
     box5.display();
    box6.display();
    }
    if(dis == 3){
        //LEVEL 3
box1.display();
box2.display();
tri.display();
tri1.display();
log1.display();
pig1.display();
pig2.display();
box3.display();
box4.display();
pig3.display();
pig3.score();
log3.display();
box6.display();


    }
    if(dis == 4){
        
        pig1.display();
        pig1.score();
    }

if(dis == 6){

    box52.display();
    box53.display();

    log2.display();
   
    pig11.display();
    pig11.score();
    pig21.display();
    pig21.score();
    pig12.display();
    pig12.score();
    pig22.display();
    pig22.score();
    box5.display();
    log5.display();
    boxa.display();
    boxab.display();
    boxac.display();
    boxad.display();
    boxae.display();
    boxaf.display();
    loga.display();
    logab.display();
    logac.display();
    box30.display();
    box31.display();
    box32.display();
    log11111111.display();
}

if(dis == 7){
    box53.display();

    
    pig11.display();
    pig11.score();
    pig21.display();
    pig21.score();
   
    pig22.display();
    pig22.score();
    box5.display();
    tri1.display();
    boxa.display();
    tri2.display();
    boxad.display();
    tri3.display();
    loga.display();
  tri4.display();
    log11.display();
}
if(dis == 8){
    
    box53.display();

    
    pig11.display();
    pig11.score();
    pig21.display();
    pig21.score();
   
    pig22.display();
    pig22.score();
    box5.display();
    tri1.display();
    boxa.display();
    tri2.display();
    boxad.display();
    tri3.display();
    loga.display();
  tri4.display();
    log11.display();
}
if(dis == 9){
    pig2.display();
 pig2.score();
}












   /*
   //LEVEL1
   
    box52.display();
    box53.display();
    log11.display();
    log111.display();
    log1111.display();
    log11111.display();
    log111111.display();
    log11111111.display();
    log1111111.display();
    log1.display();
    log2.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig11.display();
    pig11.score();
    pig21.display();
    pig21.score();
    pig12.display();
    pig12.score();
    pig22.display();
    pig22.score();
    box5.display();
    log5.display();
    log51.display();

    */
    
   /*
    //LEVEL 2
     box1.display();
    box2.display();
    log12.display();
    tri.display();
    tri2.display();
    tri3.display();
    tri1.display();
    log1.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
   log1.display
    box5.display();
   box6.display();
*/
/*
//LEVEL 3
box1.display();
box2.display();
tri.display();
tri1.display();
log1.display();
pig1.display();
pig2.display();
box3.display();
box4.display();
pig3.display();
pig3.score();
log3.display();
box6.display();
*/
if(dis == 1|| dis==2 || dis==3 || dis==4 && tw == 1000){
    ground.display();
}
if(dis == 6|| dis==7 || dis==8 || dis==9 && tw == 1000){
    
    ground1.display();
    ground2.display();
}
if(dis!= 5 && tw == 1000 && dis!= 10){
    bird.display();
    
    platform.display();
    //log6.display();
    reset.display();
    slingshot.display();
}
    //console.log(bird.body.speed);
if(mouseX>125 && mouseX<175 && mouseY<50 && gameState == 'launched' && lev!=5 && lev!= 10){
        //console.log('hi')
        bird.destroy();
        bird = new Bird(200,200);
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200, y:200});
        slingshot.attach(bird.body);    
        
        
 if(lev == 1){

    box100.destroy();
    box53.destroy();
    box5.destroy();
    pig1.destroy();
    pig2.destroy();
    pig11.destroy();
    pig21.destroy();
    pig12.destroy();
    pig22.destroy();
    box52.destroy();
    log2.destroy();
    log5.destroy();
    log51.destroy();
    log1.destroy();
   
    log1111.destroy();
    
    log1111111.destroy();
    log11111111.destroy();
 }
 else if(lev == 2){

    box1.destroy();
    box2.destroy();
    pig1.destroy();
    log1.destroy();
    log12.destroy();
    pig2.destroy();
    box3.destroy();
    box4.destroy();
    pig3.destroy();
    box6.destroy();
    log3.destroy();
    box5.destroy();
    tri.destroy();
    tri1.destroy();
    tri2.destroy();
    tri3.destroy();

 }
 else if (lev == 3){
    box1.destroy();
    box2.destroy();
    pig1.destroy();
    log1.destroy();
    pig2.destroy();
    box3.destroy(); 
    box4.destroy();
    pig3.destroy();
    box6.destroy();
    log3.destroy();
    tri.destroy();
    tri1.destroy();
 }
 else if (lev == 4){
    pig1.destroy();

 }
 else if (lev == 6){
     pig22.destroy();
    box53.destroy();
    box52.destroy();
    box31.destroy();
    box5.destroy();
  
    log2.destroy();
    log5.destroy();
    pig11.destroy();
    box30.destroy();
    box32.destroy();
    log11111111.destroy();
    pig21.destroy();
    pig12.destroy();
    loga.destroy();
    logab.destroy();
    logac.destroy();
    boxa.destroy();
    boxab.destroy();
    boxac.destroy();
    boxad.destroy();
    boxae.destroy();
    boxaf.destroy();
    ground1.destroy();
    ground2.destroy();
    invisi.destroy();
    invisib.destroy();
    invisibl.destroy();


 }
 else if (lev == 7){
    pig22.destroy();
    box53.destroy();
    box5.destroy();
    pig11.destroy();
    log11.destroy();
    tri1.destroy();
    tri2.destroy();
    tri3.destroy();
    tri4.destroy();
    pig21.destroy();
    loga.destroy();
    boxa.destroy();
    boxad.destroy();
    ground1.destroy();
    ground2.destroy();
    invisi.destroy();
    invisib.destroy();
    invisibl.destroy();

}
else if (lev == 8){
    pig22.destroy();
    box53.destroy();
    box5.destroy();
    pig11.destroy();
    log11.destroy();
    tri1.destroy();
    tri2.destroy();
    tri3.destroy();
    tri4.destroy();
    pig21.destroy();
    loga.destroy();
    boxa.destroy();
    boxad.destroy();
    ground1.destroy();
    ground2.destroy();
    invisi.destroy();
    invisib.destroy();
    invisibl.destroy();

}
else if (lev == 9){
    pig2.destroy();
    ground1.destroy();
    ground2.destroy();
    invisi.destroy();
    invisib.destroy();
    invisibl.destroy();

}
 gameState = 'onSling'
        lev = 1000;
        score = 0;
     dis = 0;
    le = 0;
 tw = 100;
 pt = 0;
 bier = 0;
//location.reload     
}
    // drawSprites();
 if(bier == 1) {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
 }   
 if(bier == 1) {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
 }   
    
}

function mouseDragged(){
    if (gameState =="onSling" && mouseX < 200 && bier != 1){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
        bier = 1
        pri = 1;
        if(mouseY>70){
        ar = 1;}
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
   bier = 0;
   if(mouseY > 70){
   arn = 1;}
}


    


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=2200){
        bg = "sprites/bg.jpg";
    }
    else{
        bg = "sprites/backgroundmain.jpg";
    

    
    console.log(backgroundImg);
    }}
    function loaded() {
        console.log('loaded');
      }