class Form{
    constructor(){
        this.title=createElement('h2'); 
        this.input=createInput('Name');
        this.button=createButton('PLAY');
        this.greeting=createElement('h3');
        this.reset=createButton('RESET');
        
}
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
    
        this.title.html("CAR RACE GAME");
        this.title.position(displayWidth/2 -50,0);
    
        this.input.position(displayWidth/2 -50,displayHeight/2);
        this.button.position(displayWidth/2 -30,displayHeight/2 +50);
        this.reset.position(displayWidth/2 +500,30);
    
        this.button.mousePressed(()=>{
        playerCount=playerCount+1;
        player1.Name=this.input.value();
        player1.index=playerCount;
        player1.updatePlayerinfo();
        player1.updatePlayerCount(playerCount);
        this.input.hide();
        this.button.hide();
        this.greeting.html("HELLO "+player1.Name);
        this.greeting.position(330,160);
    });
    this.reset.mousePressed(()=>{
    player1.updatePlayerCount(0);
    gameOb.updateGameState(0);
    Player.updatePlayerRank(0);
    database.ref('players/').remove();
    });
    }
}