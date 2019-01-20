//Property GamePlay Functionality
function currentPlayersBalance(){
    var player = currentPlayer;
    return currentPlayersObject[currentPlayer].balance;
}

function playerTransactionToBank(currentPlayersBank, amount){
    return currentPlayersBank-amount;
}

function playerBuysProperty(property, player){
    debugger;
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
