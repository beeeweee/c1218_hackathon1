$(document).ready(initializeGame);

//start (global) variables
var min = 1;
var max = 6;
var totlBlockCount = 39;
var numberOfPlayers = 0;
var currentPlayerPosition;

var playerIds = [];

var currentPlayerIndex = 0;
var currentPlayer = "player1";
var currentPlayersObject = {
    'player1': {
        'playerPosition': 0, 'playerStatus': 1, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,
    },
    'player2': {
        'playerPosition': 0, 'playerStatus': 0, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,
    },
    'player3': {
        'playerPosition': 0, 'playerStatus': 0, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,
    },
    'player4': {
        'playerPosition': 0, 'playerStatus': 0, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,
    },
}
//****END****/



//Game Sound
    //Background Music

this.backgroundTheme;
this.playAudio = function(){
    var playPromise = document.querySelector('#monopoly-audio').play();
    if (playPromise !== undefined) {
        playPromise.then(function() {
        }).catch(function(error) {
        });
    }
    }
    //DiceRoll
//     function diceRollSound(){this.playDiceRolling = function(){
//     this.diceRolling= $('#dice-audio').play();
//     if(diceRolling != undefined){
//         diceRolling.then(function(){
//         }).catch(function(error){     
//         });
//     }
        
//     }
// }
//Current Player Turns
//*****END *****/



function playerTurnCycler(currentPlayerTurn) {
    var totalAmtOfPlayers = Object.keys(currentPlayersObject).length;
    if (currentPlayerTurn < totalAmtOfPlayers) {
        return `player${currentPlayerTurn + 1}`;
    }
    return 'player1';
}


//money and cost allocation
function disperseMoney() {
    var totalAmtOfPlayers = Object.keys(currentPlayersObject).length;
    console.log(totalAmtOfPlayers);

    for (var indivPlayer = 1; indivPlayer <= totalAmtOfPlayers; indivPlayer++) {
        currentPlayersObject[`player${indivPlayer}`].balance += 1500;
    }
}

//player population
function populateBoardSpots(){
    for (var currentSquare = 0; currentSquare <= 39; currentSquare++){
        console.log('im doing something')
        var imageToUse = $('<img />', {
            src: `monopoly_images/board_images/position-${currentSquare}.png`,
            class: 'spotImages'
            });
        $(`.position-${currentSquare}`).append(imageToUse);
    }
}

function changePlayerArray(){
    var amount = numberOfPlayers;

    for (var indivPlayer = 1; indivPlayer <= amount; indivPlayer++){
        playerIds.push(`player${indivPlayer}`);
    }
}
//*******END ********/


//************ Initialize App **************

function initializeGame() {
     populateBoardSpots();

    $("select").change(numberOfPlayersSelected);
    numberOfPlayersSelected();

    $("#start-button").click(function () {
        $(".overlay").hide();
        changePlayerArray();
    });

    $("#toggleplayer").click(function () {
        togglePlayer();
    });

    $('.currentPlayerInfoContainer').text(
        `Current Player: ${currentPlayer.toUpperCase()} || Position on Board: ${currentPlayersObject[currentPlayer].playerPosition}`);
    //create Dice Roll Effect

//create Dice Roll Effect

    $("#btn").click(function () {
        console.log("testing1");
        playerCurrentPosition();
    })
//Deal Cards

    $('.chest-card-deck-spot').click(function () {
        if($('.chest-card-deck-spot').children().length===1){
            removeChestCard();
        } else {
            dealCommunityChestCard(randomCommunityCard());
        }
    })

    $('.chance-card-deck-spot').click(function () {
        if ($('.chance-card-deck-spot').children().length === 1) {
            removeChanceCard();
        } else {
            dealChanceCard(randomChanceCard());
        }
     })

//Background Game Music Audio
    $('#start-button').click(function(){
        playAudio();
    })
/*
    $('.dice-roll').click(function(){
        GameAudioController.playDiceRolling();
    })
    */
//remove cards clickHandlers

    $('.remove-community-card').click(function () {
        $('#community-card-deck').addClass('active');
    })

    $('.remove-chance-card').click(function () {
        $('#chance-card').addClass('active');
    })

//player 1 click handler
    $(".circle").click(function (){
        playerCurrentPosition();
    });

///show player Status
     $('.player-1-stat').mouseover(showPlayerStats);
    $('player-1-stat').mouseout(showPlayerStats);

    $('.player-2-stat').mouseover(showPlayerStats);
    $('.player-2-stat').mouseout(showPlayerStats);

    $('.small-square, .large-square').click(showDeed);
    
//Click Handlers
    $('.remove-community-card').click(function () {
        $('#community-card-deck').addClass('active');
    })
    
    $('.remove-chance-card').click(function () {
        $('#chance-card').addClass('active');
    })
    //Modal Handler
    
    $('.small-square, .large-square').click(showDeed);

    //clickHandlers
$('.remove-community-card').click(function () {
    $('#community-card-deck').addClass('active');
})

$('.remove-chance-card').click(function () {
    $('#chance-card').addClass('active');
})
}
//****END******


//****start game number of players and board setup*****
$('.currentPlayerInfoContainer').text(
    `Current Player: ${currentPlayer.toUpperCase()} || Position on Board: ${currentPlayersObject[currentPlayer].playerPosition}`);
function playerLandingLocation(){
    var playerLocation = currentPlayersObject[currentPlayer].playerPosition;
    return 'position-'+playerLocation;
}

function displayCurrentLandingCard(){
    var locationNumber = playerLandingLocation();
    return findNameByPropertyPosition(locationNumber);
}

function togglePlayer(){

    if (currentPlayerIndex < playerIds.length) {
        currentPlayer = playerIds[currentPlayerIndex];
 
        if( (currentPlayerIndex===0 || currentPlayerIndex===2) && $(currentPlayerPosition).parent().hasClass("iron-Throne")|| $(currentPlayerPosition).parent().hasClass("valar") ){
            dealCommunityChestCard(randomCommunityCard());
            removeChanceCard();
        } else if((currentPlayerIndex===1||currentPlayerIndex==3) && $(currentPlayerPosition).parent().hasClass("iron-Throne")|| $(currentPlayerPosition).parent().hasClass("valar")){
            dealChanceCard();
            removeChestCard()
        }
 
    } else {
        currentPlayerIndex = 0;
        currentPlayer = playerIds[currentPlayerIndex];
        if( (currentPlayerIndex===0 ||currentPlayerIndex===2) && $(currentPlayerPosition).parent().hasClass("iron-Throne")|| $(currentPlayerPosition).parent().hasClass("valar") ){
            dealCommunityChestCard(randomCommunityCard());
            removeChanceCard();
        } else if ((currentPlayerIndex==1 ||currentPlayerIndex==3) && $(currentPlayerPosition).parent().hasClass("iron-Throne")|| $(currentPlayerPosition).parent().hasClass("valar")){
            dealChanceCard() ;
            removeChestCard()
        }
    };
    currentPlayerIndex = currentPlayerIndex + 1;
};



function numberOfPlayersSelected() {
    numberOfPlayers = $('#numberOfPlayersSelect').val();
    console.log(numberOfPlayers);
    displayPlayersSelected();
}

function displayPlayersSelected() {
    var player2 = $('.player2');
    var player3 = $('.player3');
    var player4 = $('.player4');

    if (numberOfPlayers === "1") {
        player2.hide();
        player3.hide();
        player4.hide();
        activePlayer();
        numberOfPlayers = 1;
        if (activatedPlayers() > numberOfPlayers) {
            removePlayerPieces();
        } else {
            showPlayerPieces();
        }
       deactivePlayer();
        return;
    } else if (numberOfPlayers === "2") {
        player2.show();
        player3.hide();
        player4.hide();
        activePlayer();
        numberOfPlayers = 2;
        if (activatedPlayers() > numberOfPlayers) {
            removePlayerPieces();
        } else {
            showPlayerPieces();
            player2.show();
        }
        removePlayerPieces();
       deactivePlayer();
        console.log('player 2 added')
    } else if (numberOfPlayers === "3") {
        player2.show();
        player3.show();
        player4.hide();
        player3.show();
        activePlayer();
        numberOfPlayers = 3;
        if (activatedPlayers() > numberOfPlayers) {
            removePlayerPieces();
        } else {
            showPlayerPieces();
        }
       deactivePlayer();
        console.log('player 3 added')
    } else if (numberOfPlayers === "4") {
        player2.show();
        player3.show();
        player4.show();
        numberOfPlayers = 4;
        activePlayer();
        if (activatedPlayers() > numberOfPlayers) {
            removePlayerPieces();
        } else {
            showPlayerPieces();
        }
        console.log('player 4 added')
    }
}

function activePlayer() {
    var totalAmtOfPlayers = numberOfPlayers;
    for (var indivPlayer = 1; indivPlayer <= totalAmtOfPlayers; indivPlayer++) {
        currentPlayersObject[`player${indivPlayer}`].playerStatus = 1;
        console.log(currentPlayersObject[`player${indivPlayer}`] + " activated");
    }
}

function activatedPlayers() {
    var totalAmtOfActivePlayers = 0;
    var indexCount = 1;
    while (indexCount <= 4) {
        if (currentPlayersObject[`player${indexCount}`].playerStatus === 1) {
            totalAmtOfActivePlayers++;
            indexCount++;
        } else {
            indexCount++;
        }
    }
    return totalAmtOfActivePlayers;
}

function deactivePlayer() {
    var totalAmtOfActivePlayers = 0;
    var indexCount = 1;
    while (indexCount <= 4) {
        if (currentPlayersObject[`player${indexCount}`].playerStatus === 1) {
            totalAmtOfActivePlayers++;
            indexCount++;

        } else {
            indexCount++;
        }
    }
    for (numberOfPlayers; numberOfPlayers < totalAmtOfActivePlayers; totalAmtOfActivePlayers--) {
        currentPlayersObject[`player${totalAmtOfActivePlayers}`].playerStatus = 0;
        console.log(currentPlayersObject[`player${totalAmtOfActivePlayers}`] + " deactivated");
    }
}

function showPlayerPieces() {
    var player1 = $('<img />', {
        class: 'player1',
        src: 'monopoly_images/little_finger.PNG',
        alt: 'player1'
    }).addClass('circle');
    var player2 = $('<img />', {
        class: 'player2',
        src: 'monopoly_images/white_walker.PNG',
        alt: 'player2'
    }).addClass('circle');
    var player3 = $('<img />', {
        class: 'player3',
        src: 'monopoly_images/daenerys.PNG',
        alt: 'player3'
    }).addClass('circle');
    var player4 = $('<img />', {
        class: 'player4',
        src: 'monopoly_images/jon_snow.jpg',
        alt: 'player4'
      }).addClass('circle');
    if(numberOfPlayers === 1){
      player1.appendTo($('.position-0'));
    } else if (numberOfPlayers === 2){
      player2.appendTo($('.position-0'));
      $('.player2').show();
    } else if (numberOfPlayers === 3){
        player2.appendTo($('.position-0'));
      player3.appendTo($('.position-0'));
      $('.player2').show();
      $('.player3').show();
    } else if (numberOfPlayers === 4){  
        player2.appendTo($('.position-0'));
        player3.appendTo($('.position-0'));
      player4.appendTo($('.position-0'));
      $('.player2').show();
      $('.player3').show();
      $('.player4').show();
    }
}

function removePlayerPieces() {
    var player1 = $('<img />', {
        class: 'player1',
        src: 'monopoly_images/little_finger.PNG',
        alt: 'player1'
    }).addClass('circle');
    var player2 = $('<img />', {
        class: 'player2',
        src: 'monopoly_images/white_walker.PNG',
        alt: 'player2'
    }).addClass('circle');
    var player3 = $('<img />', {
        class: 'player3',
        src: 'monopoly_images/daenerys.PNG',
        alt: 'player3'
    }).addClass('circle');
    var player4 = $('<img />', {
        class: 'player4',
        src: 'monopoly_images/jon_snow.jpg',
        alt: 'player4'
    }).addClass('circle');
    var totalAmtOfActivePlayers = 0;
    var indexCount = 1;
    while (indexCount <= 4) {
        if (currentPlayersObject[`player${indexCount}`].playerStatus === 1) {
            totalAmtOfActivePlayers++;
            indexCount++;

        } else {
            indexCount++;
        }

    }
    if (numberOfPlayers < totalAmtOfActivePlayers) {
        player1.remove($('.position-0'));
        player2.remove($('.position-0'));
        player3.remove($('.position-0'));
        player4.remove($('.position-0'));
    } else if (numberOfPlayers < totalAmtOfActivePlayers) {
        player2.remove($('.position-0'));
        player3.remove($('.position-0'));
        player4.remove($('.position-0'));
    } else if (numberOfPlayers < totalAmtOfActivePlayers) {
        player3.remove($('.position-0'));
        player4.remove($('.position-0'));
    } else if (numberOfPlayers < totalAmtOfActivePlayers) {
        player4.remove($('.position-0'));
    }
}
//*****END******



//player game function
function diceNumbers() {
    var totalValueOfDiceRoll = [];
    var totalMove;

    $("#player1").attr('enable');

    totalValueOfDiceRoll[0] = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("first no " + totalValueOfDiceRoll[0]);
    $('#myDice1').html(`<img src="monopoly_images/figma_photo/dice/dice_${totalValueOfDiceRoll[0]}.PNG">`)
    totalValueOfDiceRoll[1] = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("second no " + totalValueOfDiceRoll[1]);
     totalMove = totalValueOfDiceRoll[0] + totalValueOfDiceRoll[1];


    $('#myDice2').html(`<img src="monopoly_images/figma_photo/dice/dice_${totalValueOfDiceRoll[1]}.PNG">`)
    if (totalValueOfDiceRoll[0] !== totalValueOfDiceRoll[1]) {

        return {
            totalMove: totalMove,
            toggle: true,
        }
    } else {
        return {
            totalMove: totalMove,
            toggle: false,
        }
        // totalMove + diceNumbers();
    }
}

function playerCurrentPosition() {
    var currentPosition = currentPlayersObject[currentPlayer]['playerPosition'];
    var result=diceNumbers();
    var diceRolls = result.totalMove; // storing the dice number
    console.log(diceRolls);
    var newPosition = currentPosition + diceRolls;
    if (newPosition > totlBlockCount) {
        newPosition = newPosition - totlBlockCount - 1;
    }
    currentPlayersObject[currentPlayer]['playerPosition'] = newPosition;
    console.log(newPosition);
     currentPlayerPosition = $('.' + currentPlayer + '.circle');
    console.log( currentPlayerPosition );
    $(`.position-${newPosition}`).append(currentPlayerPosition);
    console.log( currentPlayerPosition );
    if(result.toggle){
        togglePlayer()
    }

    $('.currentPlayerInfoContainer').text(
        `Current Player: ${currentPlayer.toUpperCase()} || Position on Board: ${currentPlayersObject[currentPlayer].playerPosition}`);
        playerLandsOnAProperty();

    $(`.indiv-players > * > *`).css('border', '0')

    $(`.indiv-players > .${currentPlayer} > img`).css('border', 'yellow 3px dashed')

}
//****END******



//Deal Community Chest Cards
var communityChestDeck = new Array();
var numberOfCardsInDeck = 10;
communityChestDeck[0] = "capture_1";
communityChestDeck[1] = "capture_2";
communityChestDeck[2] = "capture_1";
communityChestDeck[3] = "capture_1";
communityChestDeck[4] = "capture_1";
communityChestDeck[5] = "capture_1";
communityChestDeck[6] = "capture_1";
communityChestDeck[7] = "capture_1";
communityChestDeck[8] = "capture_1";
communityChestDeck[9] = "capture_1";
communityChestDeck[10] = "capture_1";

function randomCommunityCard() {
    return Math.floor(Math.random() * numberOfCardsInDeck);
}

function dealCommunityChestCard() {
    //if (numberOfCardsInDeck === 0) return false;
    //var img = (`<img id="community-card-deck" src="monopoly_images/community_chest/${communityChestDeck[i]}.PNG">`)
    var img = (`<img id="community-card-deck" src="monopoly_images/community_chest/capture_1.PNG">`)

    $('.chest-card-deck-spot').append(img);
}

function removeChestCard(){
    $('.chest-card-deck-spot img').remove();
}

//Deal Chance Cards
var chanceDeck = new Array();
var numberOfCardsInChanceDeck = 10;
chanceDeck[0] = "chance_1";
chanceDeck[1] = "chance_2";
chanceDeck[2] = "chance_3";
chanceDeck[3] = "chance_4";
chanceDeck[4] = "chance_5";
chanceDeck[5] = "chance_6";
chanceDeck[6] = "chance_7";
chanceDeck[7] = "chance_8";
chanceDeck[8] = "chance_9";
chanceDeck[9] = "chance_10";
chanceDeck[10] = "go_to_jail";
chanceDeck[11] = "Get_out_jail";

function randomChanceCard() {
    return Math.floor(Math.random() * numberOfCardsInDeck);
}

function dealChanceCard() {
    //if (numberOfCardsInDeck === 0) return false;
    //var img = (`<img id="chance-card" src="monopoly_images/chance/${chanceDeck[i]}.PNG">`)
    var img = (`<img id="chance-card" src="monopoly_images/chance/chance_1.PNG">`)
    $('.chance-card-deck-spot').append(img);
}

function removeChanceCard(){
    $('.chance-card-deck-spot img').remove();
}

function removeCard(card) {
    for (i = card; i <= numberOfCardsInDeck - 2; i++) {
        communityChestDeck[i] = communityChestDeck[i + 1];
        numberOfCardsInDeck--;
    }
}
//*****END*****



//Modal Property
var Property = function(){
    this.tileId;
    this.picture;
    this.name;
    this.tileType;
    this.propertycolorgroup;
    this.financials = {
        base:{
            rent:[],
            cost:null,
        },
        house:{
            rent:[],
            cost:null,
        },
       hotel: {
        rent:[],
        cost:null,
    }
    }
    
};

// Show Player Stats Modal
function showPlayerStats(){
    $('.modal-character-content').show();
    console.log("Hi");
}
function hidePlayerStats(){
    $('.modal-character-content').hide();
    console.log("Hi");
}

function showDeed() {
    $('#property-modal').show();
    var propertyIndex = $(this).attr('pos');
    var deedData = null;

    for (var arrayNum = 0; arrayNum < propData.length; arrayNum++){
        console.log('made it in@')
        if (propData[arrayNum][11] == propertyIndex){
            deedData = propData[arrayNum];
        }
    }

    $('#base-rent').text(deedData[3]);
    $('#property-title').text(deedData[0]);
    $('#rent-1').text(deedData[1]);
    $('#rent-2').text(deedData[2]);
    $('#rent-3').text(deedData[4]);
    $('#rent-hotel').text(deedData[8]);

   $('#mortgage-cost').text(deedData[9]);
   $('.title-name-container').css('background-color', deedData[10]);

}

function showCharacterStats(player){
    var characterIndex = currentPlayersObject[player].playerPosition;// 
    var property = propertyData[characterIndex];
    var owner = getPropertyOwner(characterIndex);
   
    if (!owner){
       
        playerCanBuyProperties(player, property);
    }else if(owner !== player){
        playerLandsOnAnotherPlayersProperty(player, property);
    } else{
        playerLandsOnAProperty();

    }
    $('#character-title-name').css('background-color', deedData[10]);
    // $('#character-name').text(characterData[]);
    // $('#houses-owned').text(characterData[]);
    // $('#hotels-owned').text(characterData[]);
}
/*****END *******/



//Property Functionality
function playerLandsOnAProperty(){
    var currentProperty = displayCurrentLandingCard();
    var currentPropertyOwner = findPropertyOwner(currentProperty);
    if(currentPropertyOwner === currentPlayer){
        return console.log('You can buy houses/hotels');
    } else if(currentPropertyOwner === null){
        return console.log('No one owns. Buy property');
    }
        return console.log('Pay Up buddy')

    // display "You already own this property"
    // prompt player to finish turn
    //console.log(`${player} owns ${}.`);
}

function playerBuysProperty(property, player){
    if(currentPlayersObject.player.balance >= findPropertyCost(property)){
        updateNewOwner(property,player);
    }
    return console.log('Not Enought Money');
}



/********END *********/


/*
0 name  
1 price
2 Price per house    
3 Rent    
4(1 House)    Rent
5(2 Houses)    Rent
6(3 Houses)    Rent
7(4 Houses)    Rent
8(Hotel) rent    
9 Mortgage
*/


