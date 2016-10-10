var pos = 25;
var a = select('#moo');

function draw() {
  //background(237, 34, 93);
  //fill(0);
  a.position(100,pos);
  //rect(25, pos, 50, 50);
}

function mouseWheel(event) {
 // println(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}