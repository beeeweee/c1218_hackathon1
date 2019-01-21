//Property GamePlay Functionality
function currentPlayersBalance(){
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
    return currentPlayersObject[currentPlayer].balance = currentPlayersBank-amount;
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
