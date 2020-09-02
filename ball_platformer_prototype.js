var level = 1;
var levelText = document.createElement("div");
levelText.innerHTML="Level: "+level;
levelText.setAttribute("id", "levelText");
levelText.style.left=1000+"px";
levelText.style.top=100+"px";
document.body.appendChild(levelText);   

// Attributes of the player
var player = {
	x: 150,
	y: 400,
	x_v: 0,
	y_v: 0,
	jump : true,
	height: 20,
	width: 20
};
var credits=false;
//Create platforms array
var platforms = [];
//create finish door
var finishPosition = [];
var finishWidth=20;
var finishHeight=30;
// Function to create platforms
function createplat(x, y){
    platforms.push(
        {
        x: x,
        y: y,
        width: 100,
        height: 10
        }
    );
}
function createFinish(x,y){
	finishPosition.push(x);
	finishPosition.push(y);
	var elem = document.createElement("div");
	elem.setAttribute("class", "finishes");
	elem.style.left=x+"px";
	elem.style.top=y+"px";
	elem.style.width=finishWidth+"px";
	elem.style.height=finishHeight+"px";
	document.getElementById("container").appendChild(elem);   
}

function drawPlatforms(){
	for (var i = 0; i < platforms.length; i++) {
		var elem = document.createElement("div");
		elem.setAttribute("class", "platforms");
		elem.style.left=platforms[i].x+"px";
		elem.style.top=platforms[i].y+"px";
		elem.style.width=platforms[i].width+"px";
		elem.style.height=platforms[i].height+"px";
		document.getElementById("container").appendChild(elem);   
	} 
}
// The status of the arrow keys    
var keys = {
	right: false,
	left: false,
	up: false,
};
// The friction and gravity to show realistic movements    
var gravity = 0.6;
var friction = 0.7;
// This function is called when one of the arrow keys is pressed
function keydown(e) {
    // 37 is the code for thr left arrow key
    if(e.keyCode == 65) {
    	keys.left = true;
    }
    // 37 is the code for the up arrow key
    if(e.keyCode == 87) {
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
    // 39 is the code for the right arrow key
    if(e.keyCode == 68) {
    	keys.right = true;
    }
}
// This function is called when the key is released
function keyup(e) {
	if(e.keyCode == 65) {
    	keys.left = false;
    }
    if(e.keyCode == 87) {
        if(player.y_v < -2) {
        player.y_v = -3;
        }
    }
    if(e.keyCode == 68) {
    	keys.right = false;
    }
} 

function loop() {
	if (credits) {
		document.getElementById("credits-container").style.top+=0.1+"px";
	}
	// If the player is not jumping apply the effect of frictiom
    if(player.jump == false) {
        player.x_v *= friction;
    } else {
        // If the player is in the air then apply the effect of gravity
        player.y_v += gravity;
    }
    player.jump = true;
    // If the left key is pressed, move the player to the left
    if(keys.left) {
        player.x+= -2.5;
    }
     // If the right key is pressed, move the player to the right
    if(keys.right) {
        player.x  += 2.5;
    }
    // Updating the y and x coordinates of the player
    player.y += player.y_v;
    player.x += player.x_v;
    //creates collision boundary
    if(player.y>=1000){
    	createLevel();
    }
    checkPlatformCollisions();
    checkFinishCollision();

    drawPlayer();
}

function checkPlatformCollisions(){
	for (var i = 0; i < platforms.length; i++) {
		if(player.x>=platforms[i].x&&player.x<=platforms[i].x+platforms[i].width&&player.y<platforms[i].y&&player.y+player.height>platforms[i].y){
			player.jump=false;
			player.y=platforms[i].y-player.height;
		}
	}
}
function checkFinishCollision(){
	if(player.x>=finishPosition[0]&&player.x<=finishPosition[0]+finishWidth&&player.y<finishPosition[1]+finishHeight&&player.y+player.height>finishPosition[1]&&level<10){
		level+=1;
		document.getElementById("levelText").innerHTML="Level: "+level;
		createLevel();
	}
}

function drawPlayer(){
	var elem = document.getElementById("player");
	elem.style.left = player.x + "px";
	elem.style.top = player.y + "px";
}

function createLevel(){
	container.innerHTML='';
	player.x=150;
	player.y=400;
	player.x_v=0;
	player.y_v=0;
	platforms=[];
	finishPosition=[];
	if (level==1) 
	{
		//create a few platforms
		createplat(140,450);
		createplat(290,450);
		createplat(440,450);
		createplat(590,450);
		createplat(740,450);
		createplat(890,450);
		createplat(1040,450);
		createFinish(1100,420);
		drawPlatforms();
	}
	else if (level==2) 
	{
		//create a few platforms
		createplat(140,550);
		createplat(290,500);
		createplat(450,450);
		createplat(610,400);
		createplat(760,350);
		createplat(905,300);
		createplat(1075,250);
		createFinish(1120,220);
		drawPlatforms();
	}
	else if (level==3) 
	{
		//create a few platforms
		createplat(140,420);
		createplat(140,460);
		createFinish(180,430);
		drawPlatforms();
	}
	else if (level==4) 
	{
		//create a few platforms
		createplat(140,550);
		createplat(290,500);
		createplat(450,450);
		createplat(290,400);
		createplat(100,350);
		createplat(290,300);
		createplat(450,250);
		createplat(580,200);
		createplat(680,200);
		createplat(720,200);
		createplat(905,300);
		createplat(1070,250);
		createFinish(1120,220);
		drawPlatforms();
	}
	else if (level==5) 
	{
		//create a few platforms
		createplat(130,420);
		createplat(150,420);
		createplat(140,460);
		createFinish(180,430);
		drawPlatforms();
	}
	else if (level==6) 
	{
		//create a few platforms
		createplat(30,420);
		createplat(150,420);
		createplat(-99,420);
		createplat(-99,370);
		createplat(-99,320);
		createplat(-99,270);
		createplat(-99,220);
		createplat(-99,170);
		createplat(-99,120);
		createplat(-99,70);
		createplat(70,170);
		createplat(170,170);
		createplat(240,170);
		createplat(310,170);
		createplat(320,370);
		createplat(490,330);
		createplat(320,250);
		createFinish(360,140);
		drawPlatforms();
	}
	else if (level==7) 
	{
		player.y=-40;
		createFinish(216,160);
		drawPlatforms();
	}
	else if (level==8) 
	{
		player.x=1100;
		//create a few platforms
		createplat(140,450);
		createplat(290,450);
		createplat(400,450);
		createplat(580,450);
		createplat(740,450);
		createplat(920,450);
		createplat(1100,450);
		createFinish(50,420);
		drawPlatforms();
	}
	else if (level==9) 
	{
		player.y=-40;
		createplat(100,300);
		createFinish(180,420);
		drawPlatforms();
	}
	else if (level==10) 
	{
		credits=true;
		player.y=260;
		player.x=710
		createplat(700,300);
		createFinish(760,270);
		drawPlatforms();
	}
}
createLevel();

document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
// Calling loop every 22 milliseconds to update the frame
setInterval(loop,22);
