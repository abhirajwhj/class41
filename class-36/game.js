class Game{
    constructor(){

    }
    getGameState(){
    var gameStateref=database.ref("GameState") ;
    gameStateref.on("value",function (data)
    {
        gameState=data.val();
    })   
    }
    updateGameState(gameStat){
        database.ref('/').update(
            {
                GameState:gameStat
            }
        )
    }
    start(){
    console.log("gameStarted");
    player1=new Player();
    player1.getPlayerCount();
    form=new Form();
    form.display();
    car1=createSprite(100,200);
    car1.addImage("car1i",car1i)
    car2=createSprite(300,200);
    car2.addImage("car2i",car2i)
    car3=createSprite(500,200);
    car3.addImage("car3i",car3i)
    car4=createSprite(700,200);
    car4.addImage("car4i",car4i)
    cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        text("GAME STARTED",120,100);
        Player.getPlayerInfo();
        player1.getPlayerRank();
        console.log("previousRank"+player1.rank);
        if(allPlayers!==undefined){
           // background(ground);
           image(tracki,0,-displayHeight*4,displayWidth,displayHeight*5)
          // cars.depth=tracki.depth;
          // cars.depth=cars.depth+1;
            var i=0;
            var carIndex=0;
            var x=150;
            var y;
                for(var plr in allPlayers){
                console.log("for loop");
                carIndex=i;
                i=i+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                console.log(carIndex);
                console.log(i);
                console.log(player1.index);
                cars[carIndex].x=x;
                cars[carIndex].y=y-50;
                if(i===player1.index){
                        stroke(10);
                        fill("red");
                        ellipse(x,y-50,100,100);
                            cars[carIndex].shapeColor="red";
                        camera.position.x=displayWidth/2;
                        camera.position.y=cars[carIndex].y;
                    }
                }
        }
        if(keyIsDown(UP_ARROW)){
        player1.distance=player1.distance+20;
        player1.updatePlayerinfo();
        }

        if(player1.distance>=3400){
                gameState=2;
                player1.rank=player1.rank+1;
                console.log("afterRank"+player1.rank);
                Player.updatePlayerRank(player1.rank);
        }

    drawSprites(); 
  }
  end(){
  
  console.log("YOU HAVE WON");
  }
}
