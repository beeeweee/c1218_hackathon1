var chanceCardActions = {
    "chance_1": ()=>{
        takePlayerMoney(currentPlayer, 10);
    },
    "chance_2": ()=>{
        takePlayerMoney(currentPlayer, 300);
    },
    "chance_3": ()=>{
        goToJail();
        displayGoToJail();
    },
    "chance_4": ()=>{
        goToJail();
        displayGoToJail();
    },
    "chance_5": ()=>{
        givePlayerMoney(currentPlayer, 100);
    },
    "chance_6": ()=>{
        givePlayerMoney(currentPlayer, 100);
    },
    "chance_7": ()=>{
        givePlayerMoney(currentPlayer, 100);
    },
    "chance_8": ()=>{
        givePlayerMoney(currentPlayer, 500);
    },
    "chance_9": ()=>{
        takePlayerMoney(currentPlayer, 200);
    },
    "chance_10": ()=>{
        goToJail();
        displayGoToJail();
    },
}

var communityCardActions = {
    "community_1": ()=>{
        givePlayerMoney(currentPlayer, 100);
    },
    "community_2": ()=>{
        goToJail();
        displayGoToJail();
    },
    "community_3": ()=>{
        takePlayerMoney(currentPlayer, 5);
    },
    "community_4": ()=>{
        takePlayerMoney(currentPlayer, 20);
    },
    "community_5": ()=>{
        takePlayerMoney(currentPlayer, 200);
    },
    "community_6": ()=>{
        takePlayerMoney(currentPlayer, 200);
    },
    "community_7": ()=>{
        
        goToFreeParking();
        displayFreeParking();
    },
    "community_8": ()=>{
        goToDragonStone();
    },
    "community_9": ()=>{
        for(player in currentPlayersObject){
            givePlayerMoney(currentPlayer, 50);
            takePlayerMoney(player, 50);
           }
    },
    "community_10": ()=>{
       for(player in currentPlayersObject){
        takePlayerMoney(currentPlayer, 30);
        givePlayerMoney(player, 30);
       }
    },
}
function goToFreeParking(){
    console.log("Going to free parking")
    currentPlayersObject[currentPlayer].playerPosition=20;
    currentPlayerPosition = $('.' + currentPlayer + '.circle');
    $(`.position-${20}`).append(currentPlayerPosition);
}

function goToJail(){
    console.log("Going to jail");
    currentPlayersObject[currentPlayer].playerPosition=10;
    currentPlayerPosition = $('.' + currentPlayer + '.circle');
    $(`.position-${10}`).append(currentPlayerPosition);
}
function goToDragonStone(){
    console.log("Going to dragonstone");
    currentPlayersObject[currentPlayer].playerPosition=10;
    currentPlayerPosition = $('.' + currentPlayer + '.circle');
    $(`.position-${10}`).append(currentPlayerPosition);
}
function passGo(){
    console.log("Passing Go");
    givePlayerMoney(currentPlayer, 200);
}

function freeParking(){
    givePlayerMoney(currentPlayer, 300);
}