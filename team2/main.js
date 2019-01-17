$(document).ready(initializeGame);

//start variables
var min=1;
var max=6;

//player variables
var currentPlayersObject = {
    'player1': {'playerPosition':0, 'playerStatus':0, 'playerName': '', 'balance': 0,
        'propertiesOwned': {}, 'railRoadsOwned':[], 'railRoadsAmtOwned':0, },
    'player2': {'playerPosition':0, 'playerStatus':0, 'playerName': '', 'balance': 0}
}

   //Game Soun
    this.backgroundTheme;
 
    this.playAudio = function(){
        var playPromise = document.querySelector('#monopoly-audio').play();
        if (playPromise !== undefined) {
          playPromise.then(function() {
          }).catch(function(error) {
          });
        }
      }
        this.playDiceRolling = function(){
       this.diceRolling= $('#dice-audio').play();
       if(diceRolling != undefined){
           diceRolling.then(function(){
           }).catch(function(error){     
           });
       }
           
        }
    }


var GameAudioController = new AudioController();

  
function playerTurnCycler(currentPlayerTurn) {
    var totalAmtOfPlayers = Object.keys(currentPlayersObject).length;

    if (currentPlayerTurn < totalAmtOfPlayers) {
        return `player${currentPlayerTurn + 1}`;
    }

    return 'player1';
}


//money and cost allocation
function disperseMoney(){
    var totalAmtOfPlayers = Object.keys(currentPlayersObject).length;
    console.log(totalAmtOfPlayers);

    for (var indivPlayer = 1; indivPlayer <= totalAmtOfPlayers; indivPlayer++){
        currentPlayersObject[`player${indivPlayer}`].balance += 1500;
    }
}





function initializeGame(){

    $("#start-button").click(function () {
        $(".overlay").hide();

    });
    //create Dice Roll Effect
    $("#btn").click(function(){
        console.log("charu");
        diceNumbers()

    })
    //Deal Cards
    $('#deal-community').click(function(){
        dealCommunityChestCard(randomCommunityCard());
    })
     $('#deal-chance').click(function(){
        dealChanceCard(randomChanceCard());
     })
     //Background Game Music Audio
     $('#start-button').click(function(){
        GameAudioController.playAudio();
    })

    $('.dice-roll').click(function(){
        GameAudioController.playDiceRolling();
    })

            //remove cards clickHandlers
    $('.remove-community-card').click(function(){
        $('#community-card-deck').addClass('active');
    })
    
    $('.remove-chance-card').click(function(){
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

    //start game click handler
    $("#start-button").click(function () {
        $(".overlay").hide();
        //startTimer();
    })

    


        //clickHandlers
    $('.remove-community-card').click(function(){
        $('#community-card-deck').addClass('active');
    })
 
    $('.remove-chance-card').click(function(){
        $('#chance-card').addClass('active');
    })
     //Modal Handler
     


     $('.small-square, .large-square').click(showDeed);
}


//player 1 click handler

$(".circle").click(function (){
    playerCurrentPosition();
});

//player game function
function diceNumbers(){
    var totalValueOfDiceRoll = [];

    $("#player1").attr('enable');
    totalValueOfDiceRoll[0]= Math.floor(Math.random()*(max-min+1)+min);
    $('#myDice1').html(`<img id="dice-roll" src="monopoly_images/figma_photo/dice/dice_${totalValueOfDiceRoll[0]}.PNG">`)
    totalValueOfDiceRoll[1]= Math.floor(Math.random()*(max-min+1)+min);
    $('#myDice2').html(`<img id="dice-roll" src="monopoly_images/figma_photo/dice/dice_${totalValueOfDiceRoll[1]}.PNG">`)
    if(totalValueOfDiceRoll[0]!==totalValueOfDiceRoll[1]) {
        totalValueOfDiceRoll = totalValueOfDiceRoll[0] + totalValueOfDiceRoll[1];
        return totalValueOfDiceRoll;
    }else {
        totalValueOfDiceRoll[0]=totalValueOfDiceRoll[0]+Math.floor(Math.random()*(max-min+1)+min);
        totalValueOfDiceRoll[1]=totalValueOfDiceRoll[1]+Math.floor(Math.random()*(max-min+1)+min);
        totalValueOfDiceRoll= totalValueOfDiceRoll[0]+totalValueOfDiceRoll[1];
         return totalValueOfDiceRoll;
    }
}

function playerCurrentPosition(){
    debugger;
    var currentPosition = currentPlayersObject.player1['playerPosition'];
    var diceRolls = diceNumbers(); // storing the dice number
    var newPosition = currentPosition + diceRolls;
    currentPlayersObject.player1['playerPosition'] = newPosition;
    var currentPlayer = $('.circle');
    $(`.position-${newPosition}`).append(currentPlayer);
    $("#player1").attr('disable');
    $("#player2").attr('enable');
}


//Deal Community Chest Cards
var communityChestDeck = new Array();
var numberOfCardsInDeck = 10;
communityChestDeck[0]="capture_1";
communityChestDeck[1]="capture_2";
communityChestDeck[2]="capture_1";
communityChestDeck[3]="capture_1";
communityChestDeck[4]="capture_1";
communityChestDeck[5]="capture_1";
communityChestDeck[6]="capture_1";
communityChestDeck[7]="capture_1";
communityChestDeck[8]="capture_1";
communityChestDeck[9]="capture_1";
communityChestDeck[10]="capture_1";


function randomCommunityCard(){
    return Math.floor(Math.random() * numberOfCardsInDeck);
}

function dealCommunityChestCard(i){
    if(numberOfCardsInDeck ===0) return false;
    var img= (`<img id="community-card-deck" src="monopoly_images/community_chest/${communityChestDeck[i]}.PNG">`)
   $('body').append(img);
   removeCard(i);
}



//Deal Chance Cards
var chanceDeck = new Array();
var numberOfCardsInChanceDeck = 10;
chanceDeck[0]="chance_1";
chanceDeck[1]="chance_2";
chanceDeck[2]="chance_3";
chanceDeck[3]="chance_4";
chanceDeck[4]="chance_5";
chanceDeck[5]="chance_6";
chanceDeck[6]="chance_7";
chanceDeck[7]="chance_8";
chanceDeck[8]="chance_9";
chanceDeck[9]="chance_10";
chanceDeck[10]="go_to_jail";
chanceDeck[11]="Get_out_jail";

function randomChanceCard(){
    return Math.floor(Math.random() * numberOfCardsInDeck);
}

function dealChanceCard(i){
    if(numberOfCardsInDeck ===0) return false;
    var img= (`<img id="chance-card" src="monopoly_images/chance/${chanceDeck[i]}.PNG">`)
   $('body').append(img);
   removeCard(i);
}
function removeCard(card){
    for(i=card; i <=numberOfCardsInDeck-2; i++){
        communityChestDeck[i] =communityChestDeck[i+1];
        numberOfCardsInDeck--;
    }
}

//Modal Property

// function showDeed(){id="dice-roll" 
//     $('#property-modal').show();
//     var propertyIndex = $(this).attr('pos');
//     var deedData = propData[propertyIndex];

//     $('#base-rent').text(deedData[3]);
//     $('#property-title').text(deedData[0]);
//     $('#rent-1').text(deedData[1]);
//     $('#rent-2').text(deedData[2]);
//     $('#rent-3').text(deedData[4]);
//     $('#rent-hotel').text(deedData[8]);
//    $('#mortgage-cost').text(deedData[9]);
//    $('.title-name-container').css('background-color', deedData[10]);

// }
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


function showDeed(){ 
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
        playerLandsOnOwnedProperty(player, property);

    }
    $('#character-title-name').css('background-color', deedData[10]);
    // $('#character-name').text(characterData[]);
    // $('#houses-owned').text(characterData[]);
    // $('#hotels-owned').text(characterData[]);

}




function playerCanBuyProperties(player, property){
    if( player >=  property){
        

    }
}
// if player has money equal to or more than the cost of the property
    // display message "You have enough money to buy property"
    // prompt if player wants to buy
    // if player buys property
        // display message "You have purchased the property"
        // subtract cost of property from player money
        // change displayed property owner
        // display remaining money
    // else player doesn't buy property
        // display message "You decided not to buy"
// else player doesn't have enough money to buy property
    // display message "Not enough money"
// 
//player can buy prop if they have enough money and if so subtract from value  


function playerLandsOnAnotherPlayersProperty(player, property){
    // get player's current money and how much they owe to property owner
    //  display how much player owes 
    //  while player doesn't have enough money to pay owner
        // if player has no remaining properties
            // player loses and pays remaining money to owner
            // exit function
        // else player does have remaining properties
            // display player's owned properties, houses, hotels, mortgages
            // display how much player can get by selling each property
            // give player choice of which property (house, hotel, mortgage) to sell
            // display message "You chose to sell _____ property"
            // change ownership status player-chosen property
            // add amount of sale to player's money
            // display player's new money total
    // player has enough money to pay owner
    // player pays money to owner
    // display player's and owner's new money total
}



function playerLandsOnOwnedProperty(player, property){
    // display "You already own this property"
    // prompt player to finish turn
    console.log(`${player} owns ${}.`);
}



//need the id to see which property the player lands on and use that function to know the character index




  //once the person lands on the property, they will need to know if they either are owners of the property or not
    //if owners: they can either purchase a another house /motel 
    //if not owners: they need to check who is the owner of the property and see how much rent to pay the owner
    //create function to check who is the owner 
   
    //create an function to find out the cost of the property any money system
    //
   // to get the amount / will need the monetary value function and create a function to run that function 
function getPropertyOwner(propertyIndex){
    //  propertyData.index
    
     if(propertyData[propertyIndex]["ownerProperty"]){
         return propertyData[propertyIndex]["ownerProperty"];
     }
     return null;
}

function setPropertyOwner(propertyIndex, currentPlayerID){
    propertyData[propertyIndex]["ownerProperty"] = currentPlayerID;
}
    
function getByID(propertyIndex){
    return propertyData[propertyIndex];
    console.log("hi");
}
