//face variables
float fh;
float fw;
float str;
float stg;
float stb;
//neck
float nek;
//mouth variables
float mt;
float mw;
float lc;
float mh;
//eye variable
float el;
float eh;
float ed;
float eb;
float pl;
float ph;
float bd;
//nose
float nw;
float nh;
//ear
float hh;
float hw;
//hat
float x;
float y;

void setup(){
size(400,400);
} 

void draw(){
background(250);
fh = random(220,360);
fw = random(200,300);
str = random(220,255);
stg = random(198,223);
stb = random(100,196);
nek = random(60,100);
mt = random(20,50);
mw = random (80,50);
lc = random (120,255);
mh = random (-10,10);
el = random (30,40);
eh = random (10,30);
ed = random (20,50);
eb= random (20,30);
pl = random (20,30);
ph= random (5,20);
bd = random(10,25);
nw= random (10,20);
nh= random (-10,40);
hh= random(30,70);
hw= random(20,50);
face();
}

void face(){
  frameRate(8);
  //head size function
  fill(str,stg,stb);
  ellipse (width/2,height/2,fw,fh);
  
  //eyes function
  fill (255);
  {ellipse ((width/4)+ed,160,el,eh);
  ellipse (300- ed,160,el,eh);}
  
  //pupils
  fill (0);
  {ellipse ((width/4)+ed,160,pl,ph);
  ellipse (300-ed,160,pl,ph);}
  
  //eye brows
  stroke(0);
  push();
  strokeWeight(random(1,5));
  line ((width/4)+ed+bd,140,(width/4)+(ed-eb),140);//left eye brow
  line (300-ed-bd,140,300-(ed-eb),140);//right eye brow
  pop();
  
  //nose
  fill(255,170,0,90);
  triangle(width/2,random(140,160),200-nw,200+nh,200+nw,200+nh);
  fill(0);
  
  //hat function
  fill(0);
  x = random(30,40);
  y = random(20,40);
  arc(200, 210-fh/2, 250-fh/2, 200-fh/2, PI, 6.3);
  rectMode(CENTER);
  rect(200,210-fh/2-y/2-10,x,y);
  
  //ear function
  noStroke();
  fill(str,stg,stb);
  ellipse(200-fw/2,200,hw,hh);
  ellipse(200+fw/2,200,hw,hh);
  
  //neck function
  fill(str,stg,stb);
  rect(width/2,height/1.3,nek,110);
  
  //mouth size function
  fill(lc,0,0);
  ellipse (width/2,270+mh ,mw,mt);
  push();
  stroke(0);
  line(width/2-mw/2, 270+mh, width/2+mw/2,270+mh);
  pop();
  
  
}
