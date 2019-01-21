//Property GamePlay Functionality
function currentPlayersBalance(){
    var player = currentPlayer;
    return currentPlayersObject[currentPlayer].balance;
}

function playerTransactionToBank(currentPlayersBank, amount){
    return currentPlayersBank-amount;
}

function playerBuysProperty(){
    var currentPosition = currentPlayersObject[currentPlayer].playerPosition;
    var currentProperty = findNameByPropertyPosition(currentPosition);
    var propertyCost = findPropertyCost(currentProperty);
    var currentPlayersBankFunds = currentPlayersBalance();
    if(currentPlayersBankFunds >= propertyCost){
        updateNewOwner(currentProperty,currentPlayer);
        playerTransactionToBank(currentPlayersBankFunds, propertyCost);
    } 
    // else if ($("#passButton").on('click', passButton))
    return console.log(findPropertyOwner(currentProperty));
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

function passingGo(){
    var currentPlayersBankFunds = currentPlayersBalance()
    console.log('Passed Go. Collected 200')
    return currentPlayersBankFunds+200;
}
//*****END*****/

//Display Transactions to DOM
