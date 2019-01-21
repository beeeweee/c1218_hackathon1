//Property GamePlay Functionality
function currentPlayersBalance(){
    return currentPlayersObject[currentPlayer].balance;
}
function getPlayersBalance(playerId){
    var player = currentPlayer;
    return currentPlayersObject[playerId].balance;
}
function givePlayerMoney(playerId, amount){
    console.log("player "+playerId+" has: " + getPlayersBalance(playerId)+ " golden dragons");
    currentPlayersObject[playerId].balance += amount;
    console.log("player "+playerId+" was given: " + amount+ " golden dragons");
    console.log("player "+playerId+" has: " + getPlayersBalance(playerId)+ " golden dragons");
}
function takePlayerMoney(playerId, amount){
    console.log("player "+playerId+" has: " + getPlayersBalance(playerId)+ " golden dragons");
    currentPlayersObject[playerId].balance -= amount;
    console.log("player "+playerId+" money taken: " + amount+ " golden dragons");
    console.log("player "+playerId+" has: " + getPlayersBalance(playerId)+ " golden dragons");
    //Handle negative amounts
}



function playerTransactionToBank(currentPlayersBank, amount){
    return currentPlayersBank-amount;
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
