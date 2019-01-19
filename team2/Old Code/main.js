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
            debugger;
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