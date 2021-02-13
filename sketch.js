var h,m,s,hh,mm,ss;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
 
}

function draw() {
  background(0);

    translate(200,200)
    rotate(-90)
    h=hour();
    m=minute();
    s=second();
    
  ss=map(s,0,60,0,360); 
  mm=map(m,0,60,0,360); 
  hh=map(h%12,0,12,0,360)
  push();
  rotate(ss);
  stroke("red");
  strokeWeight(8);
  line(0,0,90,0);
  pop();
  push();
  rotate(mm);
  stroke("blue");
  strokeWeight(8);
  line(0,0,80,0);
  pop();
  push();
  rotate(hh);
  stroke("green");
  strokeWeight(8);
  line(0,0,55,0);
  pop();
  stroke(255,0,255);
    point(0,0)

    strokeWeight(10);
    noFill();
 
    stroke("red");
    arc(0,0,300,300,0,ss);

    stroke("blue");
    arc(0,0,280,280,0,mm);

    stroke("green");
    arc(0,0,260,260,0,hh);
}