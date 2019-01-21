//Property GamePlay Functionality
function currentPlayersBalance(){
    var player = currentPlayer;
    return currentPlayersObject[currentPlayer].balance;
}
function getPlayersBalance(playerId){
    var player = currentPlayer;
    return currentPlayersObject[playerId].balance;
}
function givePlayerMoney(playerId, amount){
    var textToDisplay = ''
    textToDisplay += "Player had: " + getPlayersBalance(playerId)+ " golden dragons <br/>";
    currentPlayersObject[playerId].balance += amount;
    textToDisplay += "Player was given: " + amount+ " golden dragons <br/>";
    textToDisplay += "Player now has: " + getPlayersBalance(playerId)+ " golden dragons <br/>";
    var playerFinancialInfo = $('.player-financial-info');
    playerFinancialInfo.text('')
    playerFinancialInfo.append(textToDisplay)
}
function takePlayerMoney(playerId, amount){
    var textToDisplay = ''
    textToDisplay += "Player had: " + getPlayersBalance(playerId)+ " golden dragons <br/>";
    currentPlayersObject[playerId].balance -= amount;
    textToDisplay += "Player money taken: " + amount+ " golden dragons <br/>";
    textToDisplay += "Player now has: " + getPlayersBalance(playerId)+ " golden dragons <br/>";
    //Handle negative amounts
    playerFinancialInfo.text('')
    $('.player-financial-info').append(textToDisplay);

}



function playerTransactionToBank(currentPlayersBank, amount){
    return currentPlayersBank-amount;
}

function playerBuysProperty(property, player){

    var propertyCost = findPropertyCost(property);
    var currentPlayersBankFunds = currentPlayersBalance();
    if(currentPlayersBankFunds >= propertyCost){
        updateNewOwner(property,player);
        playerTransactionToBank(currentPlayersBankFunds, propertyCost);
    }
    return console.log(findPropertyOwner(property));
}

function rentPaidToOwner(currentProperty){
    var currentPlayersBankFunds = currentPlayersBalance();
    var currentPropertyRentAmount = findPropertyCurrentRent(currentProperty);
    var propertyOwner = findPropertyOwner(currentProperty);
    var propertyOwnersBankFunds = currentPlayersObject[propertyOwner].balance;
    currentPlayersBankFunds -= currentPropertyRentAmount;
    propertyOwnersBankFunds += currentPropertyRentAmount;
    console.log(currentPlayersBankFunds);
    console.log(propertyOwnersBankFunds);
}
//*****END*****/

//Display Transactions to DOM
