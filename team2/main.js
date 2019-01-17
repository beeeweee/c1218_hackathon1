$(document).ready(initializeGame)

//start variables
var min=1;
var max=6;
var position=0;

//player variables
var currentPlayersObject = {
    currentPlayers: [],
    currentNumberOfPlayesr: 0,
    playerStatus: [0,0,0,0],
    playerName: [null,null,null,null]
}

function initializeGame(){

    $("#start-button").click(function () {
        $(".overlay").hide();

    });
    //create Dice Roll Effect
    $("#btn").click(function(){
         var randomDice1Roll= Math.floor(1+ Math.random()*6);
         var randomDice2Roll=Math.floor(1+Math.random()*6);
         $('#myDice1').html(`<img src="monopoly_images/figma_photo/dice/dice_${randomDice1Roll}.PNG"></img>`)
         $('#myDice2').html(`<img src="monopoly_images/figma_photo/dice/dice_${randomDice2Roll}.PNG"></img>`)
    })
    //Deal Cards
    $('#deal-community').click(function(){
        dealCommunityChestCard(randomCommunityCard());
    })
     $('#deal-chance').click(function(){
        dealChanceCard(randomChanceCard());
     })


            //remove cards clickHandlers
    $('.remove-community-card').click(function(){
        $('#community-card-deck').addClass('active');
    })
    
    $('.remove-chance-card').click(function(){
        $('#chance-card').addClass('active');
    })

    
    //enlarge property mouseover clickHandlers

   
    //start game click handler
    $("#start-button").click(function () {
        $(".overlay").hide();
        //startTimer();
    })

    //player 1 click handler
    $("#player1").click(function (){
        playerGame()
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

//start game click handler



//player 1 click handler
    $("#player1").click(function (){
        playerGame()

    });

}

//player game function
function playerGame(){
    $("#player1").attr('enable');
    var dice1RandomeNum= Math.floor(Math.random()*(max-min+1)+min);
    var dice2RandomeNum= Math.floor(Math.random()*(max-min+1)+min);
    var totalNum=dice1RandomeNum+dice2RandomeNum;
    position=position+totalNum;
    $(".dice1").append(dice1RandomeNum);
    $(".dice2").append(dice2RandomeNum);




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



//Enlarge Property Element

    /*
      base-rent
        property-title
        rent-1
        rent-2
        rent-hotel
        mortgage-cost
    */

function showDeed(){
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
