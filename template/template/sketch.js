var yellow1 = 0;


//The setup function only happens once
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas

}
  

//The draw function happens over and over again
function draw() {
  background("#7B83B5"); //an RGB color for the canvas' background
  
  //circle
  
  fill("#F400B3");//hot pink fill
  ellipse(250,250,yellow1,yellow1);
  yellow1=yellow1+5;// increase the diameter of the elipse by 5px
  
  stroke(255,255,127) // an RGB color for the circle's border
  fill("#F4F135"); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),
          random(height),20,20); //select a random number between 0 and the width/height for the xand Y value.
  
  //text

  textSize(45);// 45px font
  fill("#929FB5");// silver fill
  textFont("georgia");// font family
  textStyle(ITALIC);// font style
  textAlign(CENTER);// position font
  text("*Happy New Year*",250,250);

  //circle

  fill("#AA002D");// red fill
  ellipse(mouseX,mouseY,20,20);

  //text

  textSize(45);// 45px font
  fill("#929FB5");//silver fill
  textFont("georgia");// font family
  textAlign(CENTER);// font position
  text("*          *",250,100);

  //text

  textSize(45);// 45px font
  fill("#929FB5");// silver font
  textFont("georgia");// font family
  textAlign(CENTER); // font position
  text("*                       *",200,450);


} 

//mouse pressed

function mousePressed(){
    if (yellow1 > 10){
     yellow1 = 0;
    }else{
    yellow1 = yellow1+5;// is called every time a mouse button is pressed
  }


    }
  

