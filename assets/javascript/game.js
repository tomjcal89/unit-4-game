
//  ---------java script---------
//When page loades


var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var jewel1 = "";
    var jewel2 = "";
    var jewel3 = "";
    var jewel4 = "";
    var winningNumber = 19 + Math.floor(Math.random() * 101);


$(document).ready(function () {

    //   need to establish variables

    

    // putting initial total score on screen
    $("#totalScoreId").text(totalScore);


    //    when the webpage loads, need to make a random number populate as the "Winning Number". this number generate inbetween the numbers 19 and 120
    $("#winningNumberId").text(winningNumber);

    //when page loads, wins/losses and "total score" will all be set to 0
    $("#winsId").text("Wins: " + wins);
     $("#lossesId").text("Losses: " + losses);
    




    // each jewel will need to store a different random number in it. the random jewel number will generate inbetween 1 and 12
    jewel1 = 1 + Math.floor(Math.random() * 12);
    jewel2 = 1 + Math.floor(Math.random() * 12);
    jewel3 = 1 + Math.floor(Math.random() * 12);
    jewel4 = 1 + Math.floor(Math.random() * 12);

    //when someone clicks on the random jewel, the number will be populated in the total score div. (if there is already a number in the "total score", then the new number will be added to the "total score".)

    $("#jewel1Id").on("click", function () {

        if (jewel1 + totalScore) {
            totalScore = jewel1 + totalScore;
            $("#totalScoreId").text(totalScore);
        }
    });

    $("#jewel2Id").on("click", function () {

        if (jewel2 + totalScore) {
            totalScore = jewel2 + totalScore;
            $("#totalScoreId").text(totalScore);
        }
    });

    $("#jewel3Id").on("click", function () {

        if (jewel3 + totalScore) {
            totalScore = jewel3 + totalScore;
            $("#totalScoreId").text(totalScore);
        }
    });

    $("#jewel4Id").on("click", function () {

        if (jewel4 + totalScore) {
            totalScore = jewel4 + totalScore;
            $("#totalScoreId").text(totalScore);
        }
    });
    console.log(jewel1)
    console.log(jewel2)
    console.log(jewel3)
    console.log(jewel4)

   


    // calling out the functions for winning and lossing
    


    // if the "total score" goes beyong the "Winning Number", then the player loses and losses will go up by 1, "winning number" will generate a new random number inbetween 19-120, the "total score" will be set back to 0, and the jewels will all reset to new random numbers inbetween 1-12.
   

    if (winningNumber === totalScore) {         
    

    }

    if (winningNumber < totalScore) {
        

    }

    //if the "total score" matches the "winning number",  then the player wins and win's will go up by 1, "winning number" will generate a new random number inbetween 19-120, the "total score" will be set back to 0, and the jewels will all reset to new random numbers inbetween 1-12.



});





    //do i need the random numbers to not generate the same number? do i need to have them generate even and odd numbers? can someone always win the game?//
