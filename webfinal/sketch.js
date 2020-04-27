
	var bg;
	//area not captured by the camera
	var SCENE_W = 3600;
	var SCENE_H = 5000;
	var carSprite;

function setup() {
	createCanvas(1200,600);

	bg = new Group();



//dashed yellow lines on the road
 	 for(var i=0; i < width; i++){
 	 	for(var j=0; j < SCENE_H; j+= 100){
 	 		if (i == width/2){
 	 				 var yellowLine = createSprite(i,j,30,60);
  	 	 			yellowLine.shapeColor = "yellow";

  	 				 bg.add(yellowLine);


 	 		}
 	 	}
 	 }

}

function preload(){
 // carSprite= loadImage('https://cors-anywhere.herokuapp.com/https://opengameart.org/sites/default/files/cars_racer.svg',100,50,1);
 	 carSprite = loadImage('assets/cars_racer.png',width/2,150,100);
}

function draw() {
background(75);
drawSprites(bg);
 camera.zoom = 1;
 camera.position.y = mouseY;
 console.log(mouseX,mouseY);



image(carSprite,600,330);
}

