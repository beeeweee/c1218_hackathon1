$(document).ready(initializeApp)

var min=1;
var max=6;
var position=0;
function initializeApp(){

    $("#start-button").click(function () {
        $(".overlay").hide();
        startTimer();
    })

}

$("#player1").click(function (){
    playerGame()
}


function playerGame(){
    $("#player1").attr('enable');
    var dice1RandomeNum= Math.floor(Math.random()*(max-min+1)+min);
    var dice2RandomeNum= Math.floor(Math.random()*(max-min+1)+min);
    var totalNum=dice1RandomeNum+dice2RandomeNum;
    var position=position+totalNum;
    $(".dice1").append(dice1RandomeNum);
    $(".dice2").append(dice2RandomeNum);



}


