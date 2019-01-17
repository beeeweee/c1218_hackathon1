$(document).ready(initializeGame)

//start variables

var min = 1;
var max = 6;
var totlBlockCount = 43;
var numberOfPlayers = 0;

var playerIds = ['player1', 'player2'];
var currentPlayerIndex = 0;
var currentPlayer = "player1";

//player variables
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


    /*    currentPlayers: [],
        currentNumberOfPlayesr: 0,
        playerStatus: [0,0,0,0],
        playerName: [null,null,null,null],
        playerPosition:*/
}


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


function populateBoardSpots(){
    for (var currentSquare = 0; currentSquare <= 39; currentSquare++){
//     var imageToUseContainer = $('div');
        console.log('im doing something')
        var imageToUse = $('<img />', {
            src: `monopoly_images/board_images/position-${currentSquare}.png`
            });
        $(`.position-${currentSquare}`).append(imageToUse);
        // $(`.position${currentSquare}`).append(imageToUse);
    }
}


function initializeGame() {
    // populateBoardSpots();

    $("select").change(numberOfPlayersSelected);
    numberOfPlayersSelected();

    $("#start-button").click(function () {
        $(".overlay").hide();
    });

    $("#toggleplayer").click(function () {

        togglePlayer();
    });



    //create Dice Roll Effect
    $("#btn").click(function () {
        console.log("testing1");
        playerCurrentPosition();
    })
    //Deal Cards

    $('.chest-card-deck-spot').click(function () {
        dealCommunityChestCard(randomCommunityCard());
    })
    $('.chance-card-deck-spot').click(function () {

        dealChanceCard(randomChanceCard());
    })


    //remove cards clickHandlers
    $('.remove-community-card').click(function () {
        $('#community-card-deck').addClass('active');
    })

    $('.remove-chance-card').click(function () {
        $('#chance-card').addClass('active');
    })


}


//enlarge property mouseover clickHandlers


//start game click handler
$("#start-button").click(function () {
    $(".overlay").hide();
    //startTimer();
});

function togglePlayer(){
    currentPlayerIndex = currentPlayerIndex + 1;
    if (currentPlayerIndex < playerIds.length) {
        currentPlayer = playerIds[currentPlayerIndex]
    } else {
        currentPlayerIndex = 0;
        currentPlayer = playerIds[currentPlayerIndex];
    }
};


//clickHandlers

$('.remove-community-card').click(function () {
    $('#community-card-deck').addClass('active');
})

$('.remove-chance-card').click(function () {
    $('#chance-card').addClass('active');
})


//start game number of players
function numberOfPlayersSelected() {
    numberOfPlayers = $('#numberOfPlayersSelect').val();
    console.log(numberOfPlayers);
    diplayPlayersSelected();
}

function diplayPlayersSelected() {
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

    //Modal Handler


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
    } else if (numberOfPlayers === 3){
        player2.appendTo($('.position-0'));
      player3.appendTo($('.position-0'));
    } else if (numberOfPlayers === 4){  
        player2.appendTo($('.position-0'));
        player3.appendTo($('.position-0'));
      player4.appendTo($('.position-0'));
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

//clickHandlers
$('.remove-community-card').click(function () {
    $('#community-card-deck').addClass('active');
})

$('.remove-chance-card').click(function () {
    $('#chance-card').addClass('active');
})
//Modal Handler


//start game click handler


$('.small-square, .large-square').click(showDeed);

//start game click handler


//player 1 click handler

/*$(".circle").click(function (){
    console.log("ab");
    playerCurrentPosition();
});*/

// player choosing name from name array


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
    var currentPlayerPosition = $('.' + currentPlayer + '.circle');
    $(`.position-${newPosition}`).append(currentPlayerPosition);
    if(result.toggle){
        togglePlayer()
    }

}


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


function dealCommunityChestCard(i) {
    if (numberOfCardsInDeck === 0) return false;
    var img = (`<img id="community-card-deck" src="monopoly_images/community_chest/${communityChestDeck[i]}.PNG">`)
    $('.chest-card-deck-spot').append(img);
    removeCard(i);

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


function dealChanceCard(i) {
    if (numberOfCardsInDeck === 0) return false;
    var img = (`<img id="chance-card" src="monopoly_images/chance/${chanceDeck[i]}.PNG">`)
    $('.chance-card-deck-spot').append(img);
    removeCard(i);

}

function removeCard(card) {
    for (i = card; i <= numberOfCardsInDeck - 2; i++) {
        communityChestDeck[i] = communityChestDeck[i + 1];
        numberOfCardsInDeck--;
    }
}


//Enlarge Property Element

/*
  base-rent
    property-title
    rent-1
    rent-2
    rent-hotel
    mortgage-cost
*/

function showDeed() {
    debugger;
    $('#property-modal').show();
    var propertyIndex = $(this).attr('pos');
    var deedData = propData[propertyIndex];

    $('#base-rent').text(deedData[3]);
    $('#property-title').text(deedData[0]);
    $('#rent-1').text(deedData[1]);
    $('#rent-2').text(deedData[2]);
    $('#rent-3').text(deedData[4]);
    $('#rent-hotel').text(deedData[8]);
    $('#mortgage-cost').text(deedData[9]);

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


// //players effect
// var player1 =`<div id="player1"></div>`;
// $('.boardGame').append(player1);
// $(document).keydown(function(e)){
//     alert(e.keycode);


//     var getPosition=$('#player').position();
//     switch(e.keyCode)
//     {
//         case 37:
//         $('#player1').css('left', position.left - //however many px we want // + 'px');
//         break;
//         case 38:
//         $('#player1').css('top', position.top -//however many px we want // + 'px');
//         break;
//         case 39:
//         $('#player1').css('right', position.right -//however many px we want // + 'px');
//         break;
//         case 40:
//         $('#player1').css('right', position.right -//however many px we want // + 'px');;
//         break;
//     }
// }
