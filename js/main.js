class RockPaperScissors {
    constructor(HumanChosenValue, BotChosenValue = -1) {
        this.HumanChosenValue = HumanChosenValue;
        this.BotChosenValue = BotChosenValue;
    }
    getHumanChosenValue() {
        return this.HumanChosenValue;
    }
    getBotChosenValue() {
        return this.BotChosenValue;
    }
    get Decision() {
        return {
            0: 'ROCK',
            1: 'PAPER',
            2: 'SCISSORS'
        };
    }
    get Result() {
        return {
            WINNER: 1,
            LOSER: 0,
            DRAW: 0.5,
        }
    }
    get State() {
        return {
            ROCK: 0,
            PAPER: 1,
            SCISSORS: 2,
        }
    }
    get rpsDatabase() {
        return {
            ROCK: { SCISSORS: this.Result.WINNER, ROCK: this.Result.DRAW, PAPER: this.Result.LOSER },
            PAPER: { ROCK: this.Result.WINNER, PAPER: this.Result.DRAW, SCISSORS: this.Result.LOSER },
            SCISSORS: { PAPER: this.Result.WINNER, SCISSORS: this.Result.DRAW, ROCK: this.Result.LOSER }
        }
    }
    ProcessTheWinner() {
        const humanDecision = this.Decision[this.HumanChosenValue];
        const botDecision = this.Decision[this.BotChosenValue];
        let decissionResult = [humanDecision, botDecision];

        const humanScore = this.rpsDatabase[decissionResult[0]][decissionResult[1]];
        const botChoice = this.rpsDatabase[decissionResult[1]][decissionResult[0]];
        let winnerResult = [humanScore, botChoice]
        return winnerResult;
    }
}
class Human extends RockPaperScissors {
    constructor(ChosenValue) {
        super(ChosenValue);
    }
    getHumanChoice() {
        return parseInt(super.getHumanChosenValue());
    }
}
class Bot extends RockPaperScissors {
    constructor(ChosenValue = Math.floor(Math.random() * 3)) {
        super(-1, ChosenValue);
    }
    getBotChoice() {
        return parseInt(super.getBotChosenValue());
    }
}

function rpsGame(yourchoice) {
    var humanChoice = new Human(Math.floor(yourchoice.id));
    var botChoice = new Bot();
    var game = new RockPaperScissors(humanChoice.getHumanChoice(), botChoice.getBotChoice());
    let Scores = game.ProcessTheWinner();
    Scores.push(humanChoice.getHumanChoice());
    Scores.push(botChoice.getBotChoice());
    const result = finalMessage(...Scores);
    rpsFrontEnd(result);
}
function rpsFrontEnd(finalResult) {
    var imageDatabse = {
        '0': document.getElementById("0").src,
        '1': document.getElementById("1").src,
        '2': document.getElementById("2").src
    }
    document.getElementById('0').remove();
    document.getElementById('1').remove();
    document.getElementById('2').remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imageDatabse[finalResult['Human']] + "' height=150 width=150 />";
    messageDiv.innerHTML = "<h1 style='font-size: 60px padding: 30px ;color: " + finalResult['color'] + "'>" + finalResult.Message + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabse[finalResult['Bot']] + "' height=150 width=150 />";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function finalMessage(humanScore, botScore, humanChoice, botChoice) {
    if (humanScore === 0)
        return { 'Human': humanChoice, 'Bot': botChoice, 'Message': 'You Lost!', 'color': 'red' };
    else if (humanScore === 0.5)
        return { 'Human': humanChoice, 'Bot': botChoice, 'Message': 'Draw', 'color': 'yellow' };
    else if (humanScore === 1)
        return { 'Human': humanChoice, 'Bot': botChoice, 'Message': 'You Win', 'color': 'green' };
}

function generateBotChoice() {
    return Math.floor(Math.random() * 3)
}