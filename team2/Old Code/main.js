//property checks and allocation
function numberOfPropertiesOwned(){
    var numberOfActivePlayers = numberOfPlayers;
    // var currentNumberOfPropertiesOwned = Object.keys(currentPlayersObject.player1.propertiesOwned).length;
    var numberOfPropertiesOwned = 0;
    console.log(currentPlayersObject.player1.propertiesOwned['2']);
    while(numberOfActivePlayers){
        numberOfPropertiesOwned += Object.keys(currentPlayersObject[`player${numberOfActivePlayers}`].propertiesOwned).length;
        numberOfActivePlayers--;
    }
    return numberOfPropertiesOwned;
}

function checkWhatTypeOfPropertiesPlayerHas(currentProperty){
    var currentNumberOfPropertiesOwned = numberOfPropertiesOwned();
    var activePlayers = numberOfPlayers;
    while(activePlayers){
        for(currentNumberOfPropertiesOwned; currentNumberOfPropertiesOwned > 0; currentNumberOfPropertiesOwned--){
     
            if(currentProperty === currentPlayersObject[`player${activePlayers}`].propertiesOwned[`${currentNumberOfPropertiesOwned}`]){
                console.log('Same property');
            }
            console.log(currentPlayersObject[`player${activePlayers}`].propertiesOwned[`${currentNumberOfPropertiesOwned}`])
            console.log(currentProperty);
        }
        activePlayers--;  
    }
 }


 function getPropertyOwner(player){    
    var propertyOwner = null;
    for(var propertyIndex = 0; propertyIndex < propData.length; propertyIndex++){
        console.log(propData);
     if(propData[propertyIndex][12] === player){
         return player;
     }
}
     return propertyOwner;
}

function getProperty (){    
    for(var propertyIndex = 0; propertyIndex < propData.length; propertyIndex++){
        propData[propertyIndex][0]
         return player;
     }
}

function setPropertyOwner(property, currentPlayerID){
    var property;
    for(var propertyIndex = 0; propertyIndex < propData.length; propertyIndex++){
     if(propData[propertyIndex][12] === property){
       return propData[propertyIndex][12].push(currentPlayerID);
        }
    }
} 

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

//need the id to see which property the player lands on and use that function to know the character index

  //once the person lands on the property, they will need to know if they either are owners of the property or not
    //if owners: they can either purchase a another house /motel 
    //if not owners: they need to check who is the owner of the property and see how much rent to pay the owner
    //create function to check who is the owner 
   
    //create an function to find out the cost of the property any money system
    //
   // to get the amount / will need the monetary value function and create a function to run that function 


   function getByID(propertyIndex){
    return propertyData[propertyIndex];
    console.log("hi");
}

    //$('#mortgage-cost').text(deedData[9]);


    function playerCanBuyProperties(player, property) {
        var playerWantToPurchase = true;
        if (currentPlayersObjects.balance >= property) {
            playerHasEnoughMoney();
            playerHasPurchase();
            displayNewOwnerShip();
            displayRemainingAmount();
            playerDoesNotPurchase();
            playerDoesNotHaveEnoughMoney();
        }
    }

    // Player Has Enough Money To Purchase Property
function playerHasPurchase() {
    var costOfDifference = currentPlayersObject.balance;
    ('#playerPurchase').text();
    costOfDifference = costOfDifference - currentPlayersObject.balance;
}

function displayNewOwnerShip() {
    $('#new-ownership').text();

    function displayRemainingAmount() {
        $('#currentAmountLeft').text();

    }

    function playerDoesNotPurchase() {
        $('#doesNotPurchase').text();
    }


    function playerDoesNotHaveEnoughMoney() {
        $('#noMoneyLeft').text();
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

function playerCanBuyProperties(player, property) {
    var playerWantToPurchase = true;
    if (currentPlayersObjects.balance >= property) {
        playerHasEnoughMoney();
        playerHasPurchase();
        displayNewOwnerShip();
        displayRemainingAmount();
        playerDoesNotPurchase();
        playerDoesNotHaveEnoughMoney();
    }
}
