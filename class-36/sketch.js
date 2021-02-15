var database,gameOb,gameState,player1,playerCount,form;
var position,allPlayers,car1,car2,car3,car4,cars,car1i,car2i,car3i,car4i,tracki,ground;

function preload(){
 car1i=loadImage("images/car1.png");
 car2i=loadImage("images/car2.png");
 car3i=loadImage("images/car3.png");
 car4i=loadImage("images/car4.png");
 tracki=loadImage("images/track.jpg");
 ground=loadImage("images/ground.png");

}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  gameOb = new Game();
  gameOb.getGameState();
  gameOb.start();
}


function draw(){
 // background("white");
  if(playerCount===4 && gameState===0){
   gameOb.updateGameState(1);
    }
  if(gameState===1){
   gameOb.play();
  }
  if(gameState===2){
    gameOb.end();
   }
}

