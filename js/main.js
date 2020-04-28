function ageInDay() {
    var birthDate = prompt("what year were you born in?");
    let days = (2020 - birthDate) * 365;

    var h1 = document.createElement("h1");
    var textNode = document.createTextNode("You are " + days + " days");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textNode);
    // removeDay();
    document.getElementById("result").appendChild(h1);
}

function removeDay() {
    var result = document.getElementById("result");
    if (result.hasChildNodes)
        result.removeChild(result.childNodes[0]);
}

function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.setAttribute("src", "http://thecatapi.com/api/images/get?format=src&type=jpg&size=med");
    div.appendChild(image);
}

let Game = {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
    RESULT: {
        WINNER: 0,
        LOSER: 1,
        DRAW: 2
    },
    ProcessTheWinner: function(human, bot) {
        switch (human) {
            case this.ROCK:
                if (bot == this.ROCK)
                    return this.RESULT.DRAW;
                else if (bot == this.PAPER)
                    return this.RESULT.LOSER;
                else if (bot == this.SCISSORS)
                    return this.RESULT.WINNER;
                break;

            case this.PAPER:
                if (bot == this.ROCK)
                    return this.RESULT.WINNER;
                else if (bot == this.PAPER)
                    return this.RESULT.DRAW;
                else if (bot == this.SCISSORS)
                    return this.RESULT.LOSER;
                break;

            case this.SCISSORS:
                if (bot == this.ROCK)
                    return this.RESULT.LOSER;
                else if (bot == this.PAPER)
                    return this.RESULT.WINNER;
                else if (bot == this.SCISSORS)
                    return this.RESULT.DRAW;
                break;

        }
    }
}

function rpsGame(yourchoice) {
    var humanChoice, botChoice;
    humanChoice = Math.floor(yourchoice.id);
    botChoice = generateBotChoice();
    result = Game.ProcessTheWinner(humanChoice, botChoice);
    if (result == Game.RESULT.WINNER)
        console.log("You won");
    else if (result == Game.RESULT.DRAW)
        console.log("Draw! Try again");
    else if (result == Game.RESULT.WINNER)
        console.log("You lose");
}

function generateBotChoice() {
    return Math.floor(Math.random() * 3);
}