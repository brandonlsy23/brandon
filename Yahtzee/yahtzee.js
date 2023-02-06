$(function () { //variable used to pass data to other sub functions within this function.
    var noOfRolls = 3;
    var rolledDices = [0, 0, 0, 0, 0];
    var yahtzeeCount = 0;

    
    $("#rollButton").click(function () {//roll button on click event.
        if (noOfRolls <= 1) {
            $(this).addClass("Disabled");
        }
        noOfRolls -= 1;
        $(".unknownDice").animate({ left: '+=10' },"fast");
        $(".unknownDice").animate({ left: '-=10' }, "fast");
        $("#instructionMessage").text("Click on a die to prevent rerolling. Click again to undo.");//Implement text and show the instruction message.
        $("#noOfRolls").text(noOfRolls);

        

        $(".unknownDice").each(function () {//generate number for each dice with class unknownDice.
            if (!($(this).hasClass("savedDice"))) {
                var rolledDice = genRandomDice.call(this);

                for (let i = 1;i < 6; i++) {
                    var diceId = "#dice" + i;
                    if ($(this).is(diceId)){
                        rolledDices[i-1] = rolledDice;
                    }
                }
            }
        });
    });

     //three of a kind combination.
    $("#threeOfKindSubmit").click(function () {
        var points;
        var count = getCount(rolledDices);
        for (let i = 0; i < count.length; i++) {
            if (count[i] >= 3) {
                points=sumOfAllDice();
            }
        }
        $("#threeOfKindPoints").text(points);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#fourOfKindSubmit").click(function () {//four of a kind combination.
        var points;
        var count = getCount(rolledDices);
        for (let i = 0; i < count.length; i++) {
            if (count[i] >= 4) {
                points = sumOfAllDice();
            }
        }
        $("#fourOfKindPoints").text(points);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#fullHouseSubmit").click(function () {//full house combination.
        var points = 0;
        var count = getCount(rolledDices);
        for (let i = 0; i < count.length; i++) {
            if (count[i] == 2) {
                for (let j = 0; j < count.length; j++) {
                    if (count[j] == 3) {
                        points += 25;
                    }
                }
            }
            
        }
        $("#fullHousePoints").text(points);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#smallStr8Submit").click(function () {//small straight(4 sequence number) combination.
        var points = 0;
        rolledDices.sort();
        var valid1 = [1 ,2 ,3 ,4];
        var valid2 = [2 ,3, 4, 5];
        var valid3 = [3, 4, 5, 6];
        var rolledDicesStr = rolledDices.toString();
        if (rolledDicesStr.includes(valid1)){
            points += 30;
        }
        else if (rolledDicesStr.includes(valid2)){
            points += 30;
        }
        else if (rolledDicesStr.includes(valid3)){
            points += 30;
        }
    
        $("#smallStr8Points").text(points);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#largeStr8Submit").click(function () {//large straight(5 sequenced numbers) combination.
        var points = 0;
        rolledDices.sort();
        var valid1 = [1, 2, 3, 4, 5];
        var valid2 = [2, 3, 4, 5, 6];
        var rolledDicesStr = rolledDices.toString();
        if (rolledDicesStr.includes(valid1)) {
            points += 40;
        }
        else if (rolledDicesStr.includes(valid2)) {
            points += 40;
        }
        $("#largeStr8Points").text(points);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#yahtzeeSubmit").click(function () {//five of a kind combination.
        var points = 0;
        var count = getCount(rolledDices);
        for (let i = 0; i < count.length; i++) {
            if (count[i] >= 5) {
                points += 50;
                yahtzeeCount++;
                $(this).addClass("Disabled");
            }
        }
        $("#yahtzeePoints").text(points);
        resetRoll();
    })

    $("#chanceSubmit").click(function () {//joker/free points combination combination.
        var points = 0;
        points = sumOfAllDice();
       
        $("#chancePoints").text(points);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#yBonusSubmit").click(function () {//additional 5 of a kind combination.
        var points = 0;
        var count = getCount(rolledDices);
        if (yahtzeeCount >= 1) {
            for (let i = 0; i < count.length; i++) {
                if (count[i] >= 5) {
                    points += 100;
                    yahtzeeCount++;
                }
            }
        }
        $("#yBonusPoints").text(points);
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#aceSubmit").click(function () {//minimum of 2 ace (1).
        var acePoints = 0;
        for (let i = 0; i < 5; i++) {
            if (rolledDices[i] == 1) {
                acePoints += rolledDices[i];
            }
        }
        $("#acePoints").text(acePoints);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(),lowerTotal());
        resetRoll();

    })

    $("#twoSubmit").click(function () {//minimum of 2 twos.
        var twoPoints = 0;
        for (let i = 0; i < 5; i++) {
            if (rolledDices[i] == 2) {
                twoPoints += rolledDices[i];
            }
        }
        $("#twosPoints").text(twoPoints);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();

    })

    $("#threeSubmit").click(function () {//minimum of 2 threes.
        var threePoints = 0;
        for (let i = 0; i < 5; i++) {
            if (rolledDices[i] == 3) {
                threePoints += rolledDices[i];
            }
        }
        $("#threesPoints").text(threePoints);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();

    })

    $("#fourSubmit").click(function () {//minimum of 2 fours.
        var fourPoints = 0;
        for (let i = 0; i < 5; i++) {
            if (rolledDices[i] == 4) {
                fourPoints += rolledDices[i];
            }
        }
        $("#foursPoints").text(fourPoints);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#fiveSubmit").click(function () {//minimum of 2 fives.
        var fivePoints = 0;
        for (let i = 0; i < 5; i++) {
            if (rolledDices[i] == 5) {
                fivePoints += rolledDices[i];
            }
        }
        $("#fivesPoints").text(fivePoints);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $("#sixSubmit").click(function () {//minimum of 2 sixes.
        var sixPoints = 0;
        for (let i = 0; i < 5; i++) {
            if (rolledDices[i] == 6) {
                sixPoints += rolledDices[i];
               
            }
        }
        $("#sixesPoints").text(sixPoints);
        $(this).addClass("Disabled");
        grandTotal(subUpperTotal(), lowerTotal());
        resetRoll();
    })

    $(".unknownDice").click(function () {//select and prevent selected dice from re-rolled or unselect to let dice to be re rolled.
        if (!($(this).hasClass("savedDice"))) {
            $(this).addClass("savedDice");
        }
        else {
            $(this).removeClass("savedDice");
        }
        
    })

    function resetRoll() {// method to set the roll remaining back to 3 and change the dice to unknownDice(?).
        noOfRolls = 3;
        $(".unknownDice").each(function () {
            rolledDices = [0 ,0 ,0 ,0 ,0];
            var imageUrl = "q.png";
            $(this).css("background-image", "url(" + imageUrl + ")");

            if (($(this).hasClass("savedDice"))) {
                $(this).removeClass("savedDice");
            }
           

            $("#noOfRolls").text(noOfRolls);
            $("#instructionMessage").text("");
            if($("#rollButton").hasClass("Disabled")){
                $("#rollButton").removeClass("Disabled");
            }
        })
    }

    function subUpperTotal() { // calculate sub total of the upper section.
        var subUpperTotal = 0;
        var upperTotal = 0;
        subUpperTotal = parseInt($("#acePoints").text()) + parseInt($("#twosPoints").text()) + parseInt($("#threesPoints").text()) + parseInt($("#foursPoints").text()) + parseInt($("#fivesPoints").text()) + parseInt($("#sixesPoints").text());
        $("#subUpperTotal").text(subUpperTotal);
        upperTotal = subUpperTotal + bonus(subUpperTotal);
        $("#upperTotal").text(upperTotal);
        return upperTotal;
    }

    function lowerTotal() {// calculate the total of the lower section.
        
        var lowerTotal = 0;
        lowerTotal = parseInt($("#threeOfKindPoints").text()) + parseInt($("#fourOfKindPoints").text()) + parseInt($("#fullHousePoints").text()) + parseInt($("#smallStr8Points").text()) + parseInt($("#largeStr8Points").text()) + parseInt($("#yahtzeePoints").text()) + parseInt($("#chancePoints").text()) + parseInt($("#yBonusPoints").text());
        $("#lowerTotal").text(lowerTotal);
        return lowerTotal;
       
    }

    function grandTotal(upperTotal, lowerTotal) { // calculate the grand total which consist of the lower and upper section total.
        var grandTotal = 0;
        grandTotal = upperTotal + lowerTotal;
        $("#grandTotalPoints").text(grandTotal);
    }

    function sumOfAllDice() {
        var sum =0;
        for (let i = 0; i < rolledDices.length; i++) {
            sum += rolledDices[i];
        }
        return sum;
    }
});

function bonus(subUpperTotal) { // calculate the bonus if the condition sub total of the upper section is met.
    var addPoints = 0;
    if (subUpperTotal >= 10) {
        addPoints += 35
        $("#bonusPoints").text(35);
    }
    return addPoints;
}
function randomNumber() {
    var randomNumber = (Math.floor(Math.random() * 6)+1);
    return randomNumber;
}

function genRandomDice() {// method to assign dice with random number.
    var diceNumber = randomNumber()
    var imageUrl = diceNumber + ".png";
    $(this).css("background-image", "url(" + imageUrl + ")");
    return diceNumber;
}


function getCount(rolledDices) {//method to get the amount of same dice within the array.
    var count = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < rolledDices.length; i++) {
            count[rolledDices[i]-1]++
    }

    return count;
}

