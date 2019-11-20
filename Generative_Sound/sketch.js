let osc1;
let V1;
let x;
let x2;
let space;
let e;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  x2 = 0;
  V1= new v1(width/2,height/2);
  osc1= new p5.Oscillator(0,0);
  osc1.setType('sine');
  osc1. freq(0);
  osc1. amp(0);
  osc1. start();
  space = 1;
  e=0;
}

function draw() {
  background(250);
  // mouseClicked();
  osc1.amp(x,0.5);
  osc1.freq(x*500+x2,0.1);
  x2+=10;
  if(x2>=2000){
  x2=1;}
  text("Space for Fun",mouseX,mouseY-5);
  print(x);
  noStroke();
  fill(random(255),random(255),random(255));
  ellipse(300,300,x*100-e,x*100-e);
  
  if(keyCode == UP_ARROW && space==1){
  text("INSTRUCTIONS Press UP key to play, DOWN to increase frequency, CLICK to reset" ,15,20);
  e=0;
  x=x+1/100;
  if(x >=1){
    x=0;}}
  
if(keyCode == 32){
space = space *-1;}
  
  if(space==-1){
  x=mouseX/80;
  e=50;
  // if(x >=1){
  //   x=0;}
  // if(x2>=2000){
  // x2=1;}}



  
  
}}


class v1 {

constructor(){
  this.x=width/2;
  this.y=width/2;
  this.w=width/3;
  this.h=width/3;}
  
show(){
  ellipse(this.x,this.y,this.w,this.h);}
}

function mouseClicked(){
x=0;
x2=0;
}



