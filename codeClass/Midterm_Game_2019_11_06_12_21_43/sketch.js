let sceneNo;
let sceneManager;
//Ranger Parameters
let m;
let m2;
let s;
let s2;
let ranger;
let lr;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  sceneNo = 0;
  sceneManager = true;
  ranger=new Ranger(300,100);
  m=0;
  m2=0;
  s=1
  s2=-1
  lr=2;
}

function draw() {
  background(255);
  ranger.edgeCollider();
  if (sceneNo == 0) {
    title();
  } else if (sceneNo == 1) {
    nextScene1();
  } else if (sceneNo == 2) {
    nextScene2();
  } else if (sceneNo == 3) {
    nextScene3();
  } else if (sceneNo == 4) {
    nextScene4();
  } else if (sceneNo == 5) {
    nextScene5();
  } else if (sceneNo == 6) {
    nextScene6();
  } else if (sceneNo == 7) {
    nextScene7();
  } else if (sceneNo == 8) {
    nextScene8();
  } else if (sceneNo == 9) {
    nextScene9();
  }
  //show character
  if(sceneNo>=2&&sceneNo<9){ 
  if(keyIsPressed == true){
    if(lr==1){
      ranger.showR(m,m2,s,s2)
    }
    if(lr==2){
    ranger.show(m,m2,s,s2)}
    if(keyCode == LEFT_ARROW){
      //ranger.rangerX = 320;
      ranger.rangerX--;
      ranger.showR(m,m2,s,s2);
      lr=1;
      m = m+s;
      if(m ==10){
      s=-1;}
      if(m ==-10){
      s=1}
  
      m2 = m2+s2;
      if(m2 == -10){
      s2=1;}
      if(m2==10){
      s2=-1;}}
    if(keyCode == RIGHT_ARROW){
      ranger.rangerX++;
      ranger.show(m,m2,s,s2);
      lr=2
      m = m+s;
      if(m ==10){
      s=-1;}
      if(m ==-10){
      s=1}
  
      m2 = m2+s2;
      if(m2 == -10){
      s2=1;}
      if(m2==10){
      s2=-1;}}}
  if(keyIsPressed == false){
    if(lr==1){
      ranger.showR(m,m2,s,s2)
    }
    if(lr==2){
  ranger.show(m,m2,s,s2)}
  m=0;
  m2=0;
  s=1
  s2=-1}}
}

//scenes
function title() {
  background(135, 206, 235);
  noStroke();
  clouds();
  trees();
  fill(0);
  textSize(80);
  textStyle(BOLDITALIC);
  textFont('Courier New');
  text("The Ranger", 300, 200);
  textSize(20);
  text('click to begin', 300, 300);

  if (mouseX > 210 && mouseX < 390) {
    if (mouseY > 280 && mouseY < 310) {
      fill(255, 255, 255, 110);
      rect(210, 280, 180, 30, 20);
    }
  }

}

//Scenes
//start scene
function nextScene1() {
  background(255);
  fill(0);
  textSize(12);
  text('Hi Ranger, Good morning. This is dispatch. We have received complaints of screaming from the campgrounds. Could you investigate and report back?', 210, 150,200,200);
  text('continue', 300, 300);
  if (mouseX > 210 && mouseX < 390) {
    if (mouseY > 280 && mouseY < 310) {
      noStroke();
      fill(255, 255, 255, 110);
      rect(210, 280, 180, 30, 20);
    }
  }
}
//Start
function nextScene2() {
  background(135, 206, 235);
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  fill(120,150,20);
  for (let x = 10; x < width; x += 20){
triangle(x, 30, x - 40 , 300, x + 40, 300);}
  fill(130,200,15);
  for (let x = 10; x < width; x += 20){
triangle(x, 200, x - 40 , 300, x + 40, 300);}

}
//Camp Sign
function nextScene3() {
  background(135, 206, 235);
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  fill(120,150,20);
  for (let x = 10; x < width; x += 20){
triangle(x, 30, x - 40 , 300, x + 40, 300);}
  fill(130,200,15);
  for (let x = 10; x < width; x += 20){
triangle(x, 200, x - 40 , 300, x + 40, 300);}
  fill(100, 80, 50);
  rect(150,100,200,100);
  rect(150,200,10,120);
  rect(340,200,10,120);
  fill(255);
  textAlign(CENTER);
  textSize(15);
  text("CAMPSITE UP AHEAD", 250,150);
}
//Abandoned Tent
function nextScene4() {  
  background(135, 206, 235);
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  fill(120,150,20);
  for (let x = 10; x < width; x += 20){
triangle(x, 30, x - 40 , 300, x + 40, 300);}
  fill(138,43,226);
  rect(150,100,200,200);
  triangle(350,100,300,300,400,300);
  fill(75,0,130);
  triangle(150,100,100,300,200,300);
  fill(130,200,15);
  for (let x = 10; x < width; x += 20){
triangle(x, 200, x - 40 , 300, x + 40, 300);}
  if(mouseX>150&&mouseX<350){
  if(mouseY>100&&mouseY<300){
  textSize(20);
  fill(255); 
  text("Looks like it's empty",mouseX,mouseY)}}
}
//Body
function nextScene5() {
  background(135, 206, 235);
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  fill(120,150,20);
  for (let x = 10; x < width; x += 20){
triangle(x, 30, x - 40 , 300, x + 40, 300);}
  fill(183,3,3);
  ellipse(300,300,200,100);
  fill(130,200,15);
  for (let x = 10; x < width; x += 20){
triangle(x, 200, x - 40 , 300, x + 40, 300);}
  if(mouseX>150&&mouseX<350){
  if(mouseY>300&&mouseY<350){
  textSize(20);
  fill(255); 
  text("NOT GOOD! I have to call this in quickly!",mouseX,mouseY)}}
}
//Ranger Sign
function nextScene6() {
  background(135, 206, 235);
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  fill(120,150,20);
  for (let x = 10; x < width; x += 20){
triangle(x, 30, x - 40 , 300, x + 40, 300);}
  fill(130,200,15);
  for (let x = 10; x < width; x += 20){
triangle(x, 200, x - 40 , 300, x + 40, 300);}
  fill(100, 80, 50);
  rect(150,100,200,100);
  rect(150,200,10,120);
  rect(340,200,10,120);
  fill(255);
  textAlign(CENTER);
  textSize(10);
  text("RANGER STATION UP AHEAD", 250,150);
}
//Ranger Station
function nextScene7() {
  background(135, 206, 235);
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  fill(120,150,20);
  for (let x = 10; x < width; x += 20){
triangle(x, 30, x - 40 , 300, x + 40, 300);}
  fill(130,200,15);
  for (let x = 10; x < width; x += 20){
triangle(x, 200, x - 40 , 300, x + 40, 300);}
  fill(100, 80, 50);
  rect(550,50,50,370);
  
  
}
//Murderer
function nextScene8() {
  background(135, 206, 235);
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  fill(120,150,20);
  for (let x = 10; x < width; x += 20){
triangle(x, 30, x - 40 , 300, x + 40, 300);}
  fill(130,200,15);
  for (let x = 10; x < width; x += 20){
triangle(x, 200, x - 40 , 300, x + 40, 300);}
  fill(100, 80, 50);
  rect(0,0,600,100);
  rect(0,0,150,400);
  rect(300,0,300,400);
  rect(150,250,200,200);
  if(mouseX>0&&mouseX<600){
  if(mouseY>0&&mouseY<400){
  textSize(20);
  fill(255); 
  text("Time to call for help",mouseX,mouseY)}}
}
//End
function nextScene9() {
background(0);
fill(255);
text("No worries Ranger. Local authorities are on their way. Stay put and wait for their arrival.",210, 50,200,200);
text("RESTART",300,300);
  if(keyIsPressed==true){
  if(keyCode==32){
  sceneNo=0;
  sceneManager=true;}
  }
}


//background/assets
function trees() {
  //floor
  fill(155, 118, 83);
  rect(0, 250, 600, 200);
  noLoop();
  //loops
  for (let x = 10; x < width; x += 20) {
    r = random(0, 120);
    g = random(100, 200);
    b = random(0, 15);
    h = random(0, 30)
    w = random(-10, 10);
    //tree loops
    fill(r, g, b);
    triangle(x + w, 30 + h, x - 40 + w, 300 - h, x + 40 + w, 300 - h);
    //tree trunks
    fill(139, 69, 19);
    rect(x + w - 5, 300 - h, 10, 40);
  }
}

function clouds() {

  x = random(0, 600)
  y = random(0, 50)
  x1 = random(0, 600)
  y1 = random(0, 50)
  fill(255);
  // ellipse(0, 20, 24, 24);
  // ellipse(15,30,24,24);
  // ellipse(30,30,24,24);
  // ellipse(30,10,24,24);
  // ellipse(20,10,24,24);
  // ellipse(40,20,24,24);

  ellipse(0 + x, 20 + y, 24, 24);
  ellipse(15 + x, 30 + y, 24, 24);
  ellipse(30 + x, 30 + y, 24, 24);
  ellipse(30 + x, 10 + y, 24, 24);
  ellipse(20 + x, 10 + y, 24, 24);
  ellipse(40 + x, 20 + y, 24, 24);

  ellipse(0 + x1, 20 + y1, 24, 24);
  ellipse(15 + x1, 30 + y1, 24, 24);
  ellipse(30 + x1, 30 + y1, 24, 24);
  ellipse(30 + x1, 10 + y1, 24, 24);
  ellipse(20 + x1, 10 + y1, 24, 24);
  ellipse(40 + x1, 20 + y1, 24, 24);
}

//debugging stuffs/Scene Manager
function mouseClicked() {
  if (mouseX > 210 && mouseX < 390) {
    if (mouseY > 280 && mouseY < 310) {
      if (sceneManager == true) {
        sceneNo += 1;
      }
      if (sceneNo >= 2) {
        sceneManager = false;
      }
      print(sceneNo);
      loop();
    }
  }
}

//Ranger asset
class Ranger{

  constructor(x,y){
    this.rangerX=x;
    this.rangerY=y;
  }

  show(m,m2,s,s2){
  //neck
  noStroke();
  fill(224, 172, 105);
  rect(15+this.rangerX,40+this.rangerY,15,20);
  //head
  fill(241, 194, 125);
  beginShape();
  vertex(10+this.rangerX,10+this.rangerY);
  vertex(45+this.rangerX,10+this.rangerY);
  vertex(40+this.rangerX,40+this.rangerY);
  vertex(30+this.rangerX,45+this.rangerY);
  vertex(15+this.rangerX,40+this.rangerY);
  endShape(CLOSE);
  //hat
  fill(139,69,19);
  beginShape();
  vertex(10+this.rangerX,10+this.rangerY);
  vertex(15+this.rangerX,0+this.rangerY);
  vertex(40+this.rangerX,0+this.rangerY);
  vertex(45+this.rangerX,10+this.rangerY);
  endShape(CLOSE);
  //hat brim
  push();
  strokeWeight(4);
  stroke(139,69,19);
  line(0+this.rangerX,10+this.rangerY,60+this.rangerX,10+this.rangerY);
  pop();
  //body
  fill(160, 147, 125);
  beginShape();
  vertex(15+this.rangerX,50+this.rangerY);
  vertex(30+this.rangerX,50+this.rangerY);
  vertex(55+this.rangerX,60+this.rangerY);
  vertex(50+this.rangerX,130+this.rangerY);
  vertex(10+this.rangerX,130+this.rangerY);
  vertex(-10+this.rangerX,60+this.rangerY);
  endShape(CLOSE);
  stroke(0);
  fill(168, 147, 125);
  rect(12+this.rangerX,65+this.rangerY,10,15);
  rect(40+this.rangerX,65+this.rangerY,10,15);
  fill(255, 191, 0);
  ellipse(45+this.rangerX,70+this.rangerY,10,15);
  push();
  stroke(0);
  line(30+this.rangerX,50+this.rangerY,35+this.rangerX,130+this.rangerY);
  pop();
  //right leg upper
  fill(105,105,105);
  beginShape();
  vertex(30+this.rangerX,130+this.rangerY);
  vertex(50+this.rangerX,130+this.rangerY);
  vertex(57+this.rangerX+m,200+this.rangerY);
  vertex(32+this.rangerX+m,200+this.rangerY);
  endShape(CLOSE);
  //r leg lower
  noStroke();
  fill(241, 194, 125);
  beginShape();
  vertex(55+this.rangerX+m,200+this.rangerY);
  vertex(50+this.rangerX+m+m,260+this.rangerY+m);
  vertex(40+this.rangerX+m+m,260+this.rangerY+m);
  vertex(35+this.rangerX+m,200+this.rangerY);
  endShape(CLOSE);
  //left leg upper
  stroke(0);
  fill(105,105,105);
  beginShape();
  vertex(35+this.rangerX,130+this.rangerY);
  vertex(27+this.rangerX+m2,200+this.rangerY);
  vertex(2+this.rangerX+m2,200+this.rangerY);
  vertex(10+this.rangerX,130+this.rangerY);
  endShape(CLOSE);
  //boots right
  noStroke();
  fill(139,69,19);
  ellipse(65+this.rangerX+m+m,269+this.rangerY+m,20,12);
  beginShape();
  vertex(40+this.rangerX+m+m,260+this.rangerY+m);
  vertex(50+this.rangerX+m+m,260+this.rangerY+m);
  vertex(65+this.rangerX+m+m,265+this.rangerY+m);
  vertex(65+this.rangerX+m+m,275+this.rangerY+m);
  vertex(40+this.rangerX+m+m,275+this.rangerY+m);
  endShape(CLOSE);
  //l leg lower
  noStroke();
  fill(241, 194, 125);
  beginShape();
  vertex(25+this.rangerX+m2,200+this.rangerY);
  vertex(12+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(2+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(4+this.rangerX+m2,200+this.rangerY);
  endShape(CLOSE);
  //upper arm
  stroke(0);
  fill(168, 147, 125);
  beginShape();
  vertex(-10+this.rangerX,60+this.rangerY);
  vertex(5+this.rangerX,54+this.rangerY);
  vertex(3+this.rangerX+m,100+this.rangerY);
  vertex(-12+this.rangerX+m,100+this.rangerY);
  endShape(CLOSE);
  //belt
  push();
  strokeWeight(7);
  stroke(0);
  line(46+this.rangerX,130+this.rangerY,13+this.rangerX,130+this.rangerY);
  pop();
  //lower arm
  noStroke(0);
  fill(241, 194, 125);
  ellipse(0+this.rangerX+m+m,155+this.rangerY,10,20)
  beginShape();
  vertex(-12+this.rangerX+m,100+this.rangerY);
  vertex(0+this.rangerX+m,100+this.rangerY);
  vertex(4+this.rangerX+m+m/2,120+this.rangerY);
  vertex(5+this.rangerX+m+m,150+this.rangerY);
  vertex(-4+this.rangerX+m+m,150+this.rangerY);
  endShape(CLOSE); 
  //boots left
  fill(139,69,19);
  ellipse(25+this.rangerX+m2+m2,269+this.rangerY+m2,20,12);
  beginShape();
  vertex(2+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(12+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(25+this.rangerX+m2+m2,265+this.rangerY+m2);
  vertex(25+this.rangerX+m2+m2,275+this.rangerY+m2);
  vertex(2+this.rangerX+m2+m2,275+this.rangerY+m2);
  endShape(CLOSE);
  }

  showR(m,m2,s,s2){
  //neck
  noStroke();
  fill(224, 172, 105);
  rect(-30+this.rangerX,40+this.rangerY,15,20);
  //head
  fill(241, 194, 125);
  beginShape();
  vertex(-10+this.rangerX,10+this.rangerY);
  vertex(-45+this.rangerX,10+this.rangerY);
  vertex(-40+this.rangerX,40+this.rangerY);
  vertex(-30+this.rangerX,45+this.rangerY);
  vertex(-15+this.rangerX,40+this.rangerY);
  endShape(CLOSE);
  //hat
  fill(139,69,19);
  beginShape();
  vertex(-10+this.rangerX,10+this.rangerY);
  vertex(-15+this.rangerX,0+this.rangerY);
  vertex(-40+this.rangerX,0+this.rangerY);
  vertex(-45+this.rangerX,10+this.rangerY);
  endShape(CLOSE);
  //hat brim
  push();
  strokeWeight(4);
  stroke(139,69,19);
  line(0+this.rangerX,10+this.rangerY,-60+this.rangerX,10+this.rangerY);
  pop();
  //body
  fill(160, 147, 125);
  beginShape();
  vertex(-15+this.rangerX,50+this.rangerY);
  vertex(-30+this.rangerX,50+this.rangerY);
  vertex(-55+this.rangerX,60+this.rangerY);
  vertex(-50+this.rangerX,130+this.rangerY);
  vertex(-10+this.rangerX,130+this.rangerY);
  vertex(10+this.rangerX,60+this.rangerY);
  endShape(CLOSE);
  stroke(0);
  fill(168, 147, 125);
  rect(-20+this.rangerX,65+this.rangerY,10,15);
  rect(-50+this.rangerX,65+this.rangerY,10,15);
  fill(255, 191, 0);
  ellipse(-15+this.rangerX,70+this.rangerY,10,15);
  push();
  stroke(0);
  line(-30+this.rangerX,50+this.rangerY,-35+this.rangerX,130+this.rangerY);
  pop();
  //right leg upper
  fill(105,105,105);
  beginShape();
  vertex(-30+this.rangerX,130+this.rangerY);
  vertex(-50+this.rangerX,130+this.rangerY);
  vertex(-57+this.rangerX+m,200+this.rangerY);
  vertex(-32+this.rangerX+m,200+this.rangerY);
  endShape(CLOSE);
  //r leg lower
  noStroke();
  fill(241, 194, 125);
  beginShape();
  vertex(-55+this.rangerX+m,200+this.rangerY);
  vertex(-50+this.rangerX+m+m,260+this.rangerY+m);
  vertex(-40+this.rangerX+m+m,260+this.rangerY+m);
  vertex(-35+this.rangerX+m,200+this.rangerY);
  endShape(CLOSE);
  //left leg upper
  stroke(0);
  fill(105,105,105);
  beginShape();
  vertex(-35+this.rangerX,130+this.rangerY);
  vertex(-27+this.rangerX+m2,200+this.rangerY);
  vertex(-2+this.rangerX+m2,200+this.rangerY);
  vertex(-10+this.rangerX,130+this.rangerY);
  endShape(CLOSE);
  //l leg lower
  noStroke();
  fill(241, 194, 125);
  beginShape();
  vertex(-25+this.rangerX+m2,200+this.rangerY);
  vertex(-12+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(-2+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(-4+this.rangerX+m2,200+this.rangerY);
  endShape(CLOSE);
  //upper arm
  stroke(0);
  fill(168, 147, 125);
  beginShape();
  vertex(10+this.rangerX,60+this.rangerY);
  vertex(-5+this.rangerX,54+this.rangerY);
  vertex(-3+this.rangerX+m,100+this.rangerY);
  vertex(12+this.rangerX+m,100+this.rangerY);
  endShape(CLOSE);
  //belt
  push();
  strokeWeight(7);
  stroke(0);
  line(-46+this.rangerX,130+this.rangerY,-13+this.rangerX,130+this.rangerY);
  pop();
  //lower arm
  noStroke(0);
  fill(241, 194, 125);
  ellipse(0+this.rangerX+m+m,155+this.rangerY,10,20)
  beginShape();
  vertex(12+this.rangerX+m,100+this.rangerY);
  vertex(-0+this.rangerX+m,100+this.rangerY);
  vertex(-4+this.rangerX+m+m/2,120+this.rangerY);
  vertex(-5+this.rangerX+m+m,150+this.rangerY);
  vertex(4+this.rangerX+m+m,150+this.rangerY);
  endShape(CLOSE); 
  //boots left
  fill(139,69,19);
  ellipse(-25+this.rangerX+m2+m2,269+this.rangerY+m2,20,12);
  beginShape();
  vertex(-2+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(-12+this.rangerX+m2+m2,260+this.rangerY+m2);
  vertex(-25+this.rangerX+m2+m2,265+this.rangerY+m2);
  vertex(-25+this.rangerX+m2+m2,275+this.rangerY+m2);
  vertex(-2+this.rangerX+m2+m2,275+this.rangerY+m2);
  endShape(CLOSE);
  //boots right
  fill(139,69,19);
  ellipse(-65+this.rangerX+m+m,269+this.rangerY+m,20,12);
  beginShape();
  vertex(-40+this.rangerX+m+m,260+this.rangerY+m);
  vertex(-50+this.rangerX+m+m,260+this.rangerY+m);
  vertex(-65+this.rangerX+m+m,265+this.rangerY+m);
  vertex(-65+this.rangerX+m+m,275+this.rangerY+m);
  vertex(-40+this.rangerX+m+m,275+this.rangerY+m);
  endShape(CLOSE);
  }

  edgeCollider(){
  if(this.rangerX>=600){
  ranger.rangerX=0;
  sceneNo+=1;
  }
  }
}






