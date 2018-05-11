var socket;
var var handpics = ["rockhand.jpg", "paperhand.jpg", "scissorshand.jpg"];

function setup() {
  createCanvas(400,400)
  background(222);
  console.log(window.location);
  socket = io.connect(window.location.host);

  //named event
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
    fill(data.r,data.g,data.b);
    ellipse(data.x,data.y,5,5)
}


function draw() {
  
}

function mouseDragged() {
  console.log(mouseX + ' ' + mouseY);
  var data={
  	x: mouseX,
  	y: mouseY,
    r: r,
    g: g,
    b: b
  }
  socket.emit('mouse',data);
	noStroke();
  fill(r,g,b);
  ellipse(mouseX,mouseY,5,5);
}

function keyTyped() {
    if (key=='g') {
        r=0;
        g=255;
        b=0;      
    } else if (key=='o') {
        r=255;
        g=125;
        b=0;      
    } else {
        r=random(255);
        g=random(255);
        b=random(255);
    }
}
