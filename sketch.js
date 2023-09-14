function setup() {
  createCanvas(500, 500);
  background("black")
}

function draw() {   
  stroke("pink")
  fill ("black")
 
 // console.log(mouseIspressed);
 
 if (mouseIsPressed) 
   rect(mouseX, mouseY, 20, 35);
 
}
