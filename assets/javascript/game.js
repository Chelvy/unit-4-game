$(document).ready(function() {

    // VARIABLES

    var randomNumber = Math.floor((Math.random() * 120) + 19);
    $('#random-number').html(randomNumber);
    console.log(randomNumber);
    var crystalValue1 = Math.floor((Math.random() * 12) + 1);
    var crystalValue2 = Math.floor((Math.random() * 12) + 1);
    var crystalValue3 = Math.floor((Math.random() * 12) + 1);
    var crystalValue4 = Math.floor((Math.random() * 12) + 1);
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    $("#totalWins").text(wins);
    $("#totalLosses").text(losses);
    $("#totalScore").text(totalScore);

    // CALCULATE TOTAL SCORE AND COMPARE TO RANDOM NUMBER

    $('.crystal').on("click", function() {
        value = $(this).attr("value");
        if (parseInt(value) === 1) {
            totalScore = totalScore + crystalValue1;
            console.log("New totalScore " + totalScore);
            $("#totalScore").text(totalScore);
            winLoss();
        } else if (parseInt(value) === 2) {
            totalScore = totalScore + crystalValue2;
            console.log("New totalScore " + totalScore);
            $("#totalScore").text(totalScore);
            winLoss();
        } else if (parseInt(value) === 3) {
            totalScore = totalScore + crystalValue3;
            console.log("New totalScore " + totalScore);
            $("#totalScore").text(totalScore);
            winLoss();
        } else if (parseInt(value) === 4) {
            totalScore = totalScore + crystalValue4;
            console.log("New totalScore " + totalScore);
            $("#totalScore").text(totalScore);
            winLoss();
        }


    });

    // RESET THE GAME

    function reset() {
        randomNumber = Math.floor((Math.random() * 120) + 19);
        console.log(randomNumber);
        $('#random-number').text(randomNumber);
        crystalValue1 = Math.floor((Math.random() * 12) + 1);
        crystalValue2 = Math.floor((Math.random() * 12) + 1);
        crystalValue3 = Math.floor((Math.random() * 12) + 1);
        crystalValue4 = Math.floor((Math.random() * 12) + 1);
        totalScore = 0;
        $("#totalScore").text(totalScore);
    }

    // WIN-LOSS FUNCTION

    function winLoss() {
        if (totalScore === randomNumber) {
            wins++;
            $("#alert-win-loss").html('You won!!');
            $("#totalWins").text(wins);
            reset();
        } else if (totalScore > randomNumber) {
            losses++;
            $("#alert-win-loss").html('You lost!!');
            $("#totalLosses").text(losses);
            reset();
        }
    }

});