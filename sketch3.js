var pos = 25;
var x = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  var d = document.getElementById('#moo');
}

function draw() {
 
  background(0);
  
if(x < windowWidth){
  x += 3;
} else {
  x = 0;
}



fill(255);
textSize(50);
textFont("Georgia");
//text("Georgia", 30, 80);
for(var i = 0; i < windowHeight; i += 70){
  fill(i,100,100);
  textFont("Helvetica");
text("helvetica", x, i);
//my(200,300,(255,100,30));

if(pos > windowHeight){
  pos = 0;
} else if (pos < 0){
  pos = windowHeight;
}
d.position(pos,50);
my(50,pos,255);
my(100,pos,100);
my(width/2,pos,50);
}



}

function my(a,b,c){
  noStroke();
  fill(c,30);
  rect(a,b,50,50);
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  return false;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}