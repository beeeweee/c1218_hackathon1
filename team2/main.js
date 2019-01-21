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
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,'cards':[],
    },
    'player2': {
        'playerPosition': 0, 'playerStatus': 0, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,'cards':[],
    },
    'player3': {
        'playerPosition': 0, 'playerStatus': 0, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,'cards':[],
    },
    'player4': {
        'playerPosition': 0, 'playerStatus': 0, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned': [], 'railRoadsAmtOwned': 0,'cards':[],
    },
}
//****END****/


function addMoneyToPlayer(){

}


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
    disperseMoney();

    $("#buyButton").on('click', playerBuysProperty);
     populateBoardSpots();

     $('.property-container').hide();
     $('#passButton').click(function(){$('.property-container').hide()});

    $("select").change(numberOfPlayersSelected);
    numberOfPlayersSelected();

    $("#start-button").click(function () {
        $(".overlay").hide();
        changePlayerArray();
    });

    $("#toggleplayer").click(function () {
        togglePlayer();
    });


    var stats = `Current Player: ${currentPlayer.toUpperCase()} || Board Position: ${currentPlayersObject[currentPlayer].playerPosition} || Balance: ${currentPlayersObject[currentPlayer].balance}`;

    $('.currentPlayerInfoContainer').text(stats);
    $('.currentPlayerCards').empty();
    var currentPlayerCards = currentPlayersObject[currentPlayer].cards;
    for(var i=0;i<currentPlayerCards.length;i++){
        $('.currentPlayerCards').append(currentPlayerCards[i]);
    }

    $(`.indiv-players > .player1 > img`).css('border', 'yellow 3px dashed');



    $('.currentPlayerInfoContainer').text(stats);

        $('player1Img').click(function(){
            showPlayerStats()

        });
    //create Dice Roll Effect

//create Dice Roll Effect

    $("#btn").click(function () {
        playerCurrentPosition();
    })
//Deal Cards

   /* $('.chest-card-deck-spot').click(function () {
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

//Click Handlers
    $('.remove-community-card').click(function () {
        $('#community-card-deck').addClass('active');
    })
    
    $('.remove-chance-card').click(function () {
        $('#chance-card').addClass('active');
    })
    //Modal Handler
    
    // $('.small-square, .large-square').click(showDeed);

    showDeed();

    //clickHandlers
$('.remove-community-card').click(function () {
    $('#community-card-deck').addClass('active');
})

$('.remove-chance-card').click(function () {
    $('#chance-card').addClass('active');
})
}

//Property Click Handlers

//****END******


//****start game number of players and board setup*****
var stats = `Current Player: ${currentPlayer.toUpperCase()} || Board Position: ${currentPlayersObject[currentPlayer].playerPosition} || Balance: ${currentPlayersObject[currentPlayer].balance}`

$('.currentPlayerInfoContainer').text(stats);

var currentPlayerCards = currentPlayersObject[currentPlayer].cards;

$('.currentPlayerCards').empty();
for(var i=0;i<currentPlayerCards.length;i++){
    $('.currentPlayerCards').append(currentPlayerCards[i]);
}

function playerLandingLocation(){
    var playerLocation = currentPlayersObject[currentPlayer].playerPosition;
    return 'position-'+playerLocation;
}

function displayCurrentLandingCard(){
    var locationNumber = playerLandingLocation();
    return findNameByPropertyPosition(locationNumber);
}

function togglePlayer(){
    currentPlayerIndex = currentPlayerIndex + 1;
    if (currentPlayerIndex >= playerIds.length) {
        currentPlayerIndex = 0;
    }

    currentPlayer = playerIds[currentPlayerIndex];
 
    if($(currentPlayerPosition).parent().hasClass("chance") ){
        removeChanceCard();
        removeChestCard();
        dealChanceCard();

    } else if ($(currentPlayerPosition).parent().hasClass("community")){
        removeChanceCard();
        removeChestCard();
        dealCommunityChestCard();

    } else{
        removeChanceCard();
        removeChestCard();
    }

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
    clearChanceAndCommunityCards();
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
        passGo();
    }

    $('.player-financial-info').text('');
    currentPlayersObject[currentPlayer]['playerPosition'] = newPosition;
    console.log(newPosition);
     currentPlayerPosition = $('.' + currentPlayer + '.circle');//if element has two classes(first (.) and second (.circle)
    console.log( currentPlayerPosition );
    $(`.position-${newPosition}`).append(currentPlayerPosition);
    console.log( currentPlayerPosition );

if(newPosition == 30){
    setTimeout(function(){
        console.log("Going To Jail");
        goToJail();
    }, 2000)
    
}
if(newPosition==20){
    setTimeout(function(){
        console.log("Player gets $300");
        freeParking();
    },2000)
}

    if(result.toggle){
        $(`.indiv-players > * > *`).css('border', '0')

        $(`.indiv-players > .${currentPlayer} > img`).css('border', 'yellow 3px dashed');

        togglePlayer()
    }

    var stats = `Current Player: ${currentPlayer.toUpperCase()} || Board Position: ${currentPlayersObject[currentPlayer].playerPosition} || Balance: ${currentPlayersObject[currentPlayer].balance}`

    $('.currentPlayerInfoContainer').text(stats);
    var currentPlayerCards = currentPlayersObject[currentPlayer].cards;

    $('.currentPlayerCards').empty();
    for(var i=0;i<currentPlayerCards.length;i++){
        $('.currentPlayerCards').append(currentPlayerCards[i]);
    }

    $('.property-container').hide();

    $('.currentPlayerInfoContainer').text(stats);
        playerLandsOnAProperty();


    if ($(`.${currentPlayer}`).parent().hasClass('white-space')){
        $('#property-title').css('color', 'black')
    }
    else{
        $('#property-title').css('color', 'white')

    }

    showDeed();
    $(`.indiv-players > * > *`).css('border', '0');

    $(`.indiv-players > .${currentPlayer} > img`).css('border', 'yellow 3px dashed');

    console.log('show deed now!')

}
//****END******



//Deal Community Chest Cards
var communityChestDeck = generateCommunityCards();

function generateCommunityCards(){
    var returnArray = [];
    for(var chanceCard in chanceCardActions){
        returnArray.push(
            {
                "cardName":chanceCard,
                "cardImage":`communitychance/${chanceCard}.jpg`,
                "cardAction": chanceCardActions[chanceCard] 
            }
        )
    }
    return returnArray;
}

function generateChanceCards(){
    var returnArray = [];
    for(var communityCard in communityCardActions){
        returnArray.push(
            {
                "cardName":communityCard,
                "cardImage":`communitychance/${communityCard}.jpg`,
                "cardAction": communityCardActions[communityCard] 
            }
        )
    }
    return returnArray;
}

function randomCommunityCard() {
    return Math.floor(Math.random() * communityChestDeck.length);
}

function dealCommunityChestCard() {
    var cardIndex = randomCommunityCard();
    var img = (`<img id="community-card-deck" src="${communityChestDeck[cardIndex].cardImage}">`);
    removeChestCard();
    $('.chance-or-community-cards').append(img);
    //currentPlayersObject[currentPlayer].cards.push(img);
    communityChestDeck[cardIndex].cardAction();
}

function removeChestCard(){
    $('.chest-card-deck-spot img').remove();
}

//Deal Chance Cards
var chanceDeck = generateChanceCards(10);


function randomChanceCard() {
    return Math.floor(Math.random() * chanceDeck.length);
}
function clearChanceAndCommunityCards(){
    $("#community-card-deck").remove();
    $("#chance-card").remove();
}
function dealChanceCard() {
   var cardIndex=randomChanceCard();
    var img = (`<img id="chance-card" src="${chanceDeck[cardIndex].cardImage}">`)
    removeChanceCard();
    $('.chance-or-community-cards').append(img);
    //currentPlayersObject[currentPlayer].cards.push(img);
    chanceDeck[cardIndex].cardAction();
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
    var propertyIndex = currentPlayersObject[`${currentPlayer}`].playerPosition;
    console.log('this is property index: ', propertyIndex);
    var deedData = null;
    var foundMatch = false;

    for (var arrayNum = 0; arrayNum < propData.length; arrayNum++){
        console.log('made it in@')
        if (propData[arrayNum][11] == propertyIndex){
            deedData = propData[arrayNum];
            foundMatch = true;
        }
    }


    if (foundMatch === true){

    $('#property-cost').text(deedData[1]);
    $('#property-title').text(deedData[0]);
    $('#rent-1').text(deedData[4]);
    $('#rent-2').text(deedData[5]);
    $('#rent-3').text(deedData[6]);
    $('#rent-hotel').text(deedData[8]);

   $('#mortgage-cost').text(deedData[9]);
   $('#property-owner').text(findPropertyOwner(displayCurrentLandingCard()));
   $('.title-name-container').css('background-color', deedData[10]);

   $('.property-container').show();
    }

}



// 'property-title': "Qarth",
// 'property-position': 'position-13',
// 'property-current-rent': null,
// 'property-cost': 140,
// 'property-rent': 100,
// 'base-rent': 10,
// 'rent-1': 50,
// 'rent-2': 150,
// 'rent-3': 450,
// 'rent-4': 625,
// 'rent-hotel': 750,
// 'mortgage-cost': 70,
// 'propertyOwner': null,

function showCharacterStats(player){
    $('.modal-character-content').show();
    var characterIndex = currentPlayersObject[`${currentPlayer}`].playerPosition;// 
    var property = propertyData[characterIndex];
    var characterMoneyValue= currentPlayersObject[player].balance;


   
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
    } else if (currentPropertyOwner !== currentPlayer) {
        payRent();
        return console.log('Pay Up buddy')
    }
        return console.log('Nothing Property')

    // display "You already own this property"
    // prompt player to finish turn
    //console.log(`${player} owns ${}.`);
}
function playerBuysProperty(){
    debugger;
    var currentProperty = displayCurrentLandingCard();
    var propertyCost = findPropertyCost(currentProperty);
    var currentPlayersBankFunds = currentPlayersBalance();
    if(findPropertyOwner(currentProperty) === null){
        if(currentPlayersBankFunds >= propertyCost){
            updateNewOwner(currentProperty,currentPlayer);
            playerTransactionToBank(currentPlayersBankFunds, propertyCost);
            updateNewOwnerWithRent(currentProperty, currentPlayer);
            return console.log('property bought')
        }
    }
    return console.log(findPropertyOwner(currentProperty));
}

function passOrBuyAction(){
    if(playerBuysProperty()){
        return console.log('propert bought');
    } else if($('#passButton').click(function(){$('.property-container').hide()}))
    return console.log("passed");
}


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


