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
    if (hasChildNodes)
        removeChild(childNodes[0]);
}

function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.setAttribute("src", "http://thecatapi.com/api/images/get?format=src&type=jpg&size=med");
    div.appendChild(image);
}

let Game = {
    States: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
    },
    Result: {
        WINNER: 1,
        LOSER: 0,
        DRAW: 0.5,
    },
    Decision: {
        0: 'ROCK',
        1: 'PAPER',
        2: 'SCISSORS'
    },
    ProcessDecision: function (human, bot) {
        const humanDecision = this.Decision[human];
        const botDecision = this.Decision[bot];
        return [humanDecision, botDecision];
    },
    ProcessTheWinner: function (human, bot) {
        const rpsDatabase = {
            ROCK: { SCISSORS: this.Result.WINNER, ROCK: this.Result.DRAW, PAPER: this.Result.LOSER },
            PAPER: { ROCK: this.Result.WINNER, PAPER: this.Result.DRAW, SCISSORS: this.Result.LOSER },
            SCISSORS: { PAPER: this.Result.WINNER, SCISSORS: this.Result.DRAW, ROCK: this.Result.LOSER }
        }
        const humanScore = rpsDatabase[human][bot];
        const botChoice = rpsDatabase[bot][human];

        return [humanScore, botChoice];
    }
}

function rpsGame(yourchoice) {
    var humanChoice, botChoice;
    humanChoice = Math.floor(yourchoice.id);
    console.log('You Picked ' + Game.Decision[humanChoice]);
    botChoice = generateBotChoice();
    console.log('Computer Picked ' + Game.Decision[botChoice]);
    const Scores = Game.ProcessTheWinner(...Game.ProcessDecision(humanChoice, botChoice));
    const result = finalMessage(...Scores);
    console.log(result);
}

function finalMessage(humanScore, botScore) {
    if (humanScore === 0)
        return { 'Message': 'You Lost!', 'color': 'red' };
    else if (humanScore === 0.5)
        return { 'Message': 'Draw', 'color': 'yellow' };
    else if (humanScore === 1)
        return { 'Message': 'You Win', 'color': 'green' };
}

function generateBotChoice() {
    return Math.floor(Math.random() * 3);
}
class Parent {
    constructor(name) {
        this.name = name;
    }
    getname() {
        return this.name;
    }
}
class Child extends Parent {
    constructor(name) {
        super(name);
    }
    getMessage() {
        return 'Hello ' + super.getname();
    }
}