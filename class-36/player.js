class Player{
    constructor(){
        this.index=null;
        this.Name=null;
        this.distance=0;
        this.rank=null; 
    }
    getPlayerCount(){
        var playerCountref=database.ref("PlayerCount") ;
        playerCountref.on("value",function (data)
        {
            playerCount=data.val();
        })   
    }
    updatePlayerCount(Count){
        database.ref('/').update(
            {
                PlayerCount:Count
            }
        )
    }
    updatePlayerinfo(){
        var psindex='players/player'+this.index;
        database.ref(psindex).set(
            {
                Name:this.Name,
                distance:this.distance
            }
        )
    }
    static getPlayerInfo(){
        var playerInforef=database.ref("players") ;
        playerInforef.on("value",(data)=>{
            allPlayers=data.val();
        });
    }
    getPlayerRank(){
        var playerRankref=database.ref("CarsAtEnd") ;
        playerRankref.on("value",function (data)
        {
            this.rank=data.val();
        })   
    }
    static updatePlayerRank(Rank){
        database.ref('/').update(
            {
                CarsAtEnd:Rank
            }
        )
    }
}