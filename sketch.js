var starImg, fairyImg, bg, bgImg;
var fairyVoice,fairy;
var star;
var ground;



function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	var ground_options={
		isStatic:true
	  }


	// fairyVoice.play();

	fairy = createSprite(130, 520,ground_options);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(900,math.round(random(0,750)));
	star.addImage(starImg);
	star.scale = 0.2;

	bg=createSprite(200,200,200,200);
	bg.addImage("background",bgImg);
	

}


function draw() {
  background(255,255,255);

  if (starY=0) {
	star.velocityY=0;
	star.y=900;}
  if (star.isTouching(fairy)) {
	star.velocityY=0;
	star.y=900;
	}
}

function keyPressed(){
	if(keyDown("left_arrow")){
		fairy.x=fairy.x-3;
	  }
	  
	  if(keyDown("right_arrow")){
		fairy.x=fairy.x+3;
	  }
	
	  if (keyCode===80) {
		  star.velocityY=2;
	  }
}