const elTurn = document.querySelector("#turn");
// Kan ook met Ids:
// const elTurn = document.getElementById("turn");

const elRock = document.querySelector("#steen");
const elPaper = document.querySelector("#papier");
const elScissors = document.querySelector("#schaar");

const elChoiceP1 = document.querySelector("#choice-p1");
const elChoiceP2 = document.querySelector("#choice-p2");
const elResult = document.querySelector("#result");

const elRestart = document.querySelector("#restart");

// We kunnen een constante niet meer aanpassen
// const player1 = "";

// Dus gebruiken we let
let turn = 1;
let player1;
let player2;
let winner;

// Een functie kan je op twee manieren definiëren
// function makeChoice() {};

// Functie kan worden aangepast
// makeChoice = 5;

// Dit is hetzelfde als hierboven.
// Maar op deze manier maken we er een constante van.
const makeChoice = function (event) {
    if (turn == 1) {
        player1 = event.target.id;
        turn = 2;
    } else if (turn == 2) {
        player2 = event.target.id;
        turn = -1;
        showResult();
    }

    console.log(player1, player2);
};

// Een object met regels
// object: wint-van
const rpsRules = {
    // "steen": "schaar",
    steen: "schaar",
    papier: "steen",
    schaar: "papier"
}

// rpsRules.papier;
// rpsRules["papier"];

const showResult = function () {
    debugger;
    elChoiceP1.textContent = player1;
    elChoiceP2.textContent = player2;

    if (player1 == player2) {
        elResult.textContent = "Gelijkspel!";
    } else {
        const handPlayer1CanBeat = rpsRules[player1];
        if (handPlayer1CanBeat == player2) {
            elResult.textContent = "player 1"
        } else {
            elResult.textContent = "player 2";
        }
    }

    // } else if (rpsRules[player1] == player2) {
    //     // Bijvoorbeeld: player1=steen, player2=schaar
    //     // } else if (rpsRules[steen] == schaar) {
    //     // } else if (schaar == schaar) {
    //     elResult.textContent = "player 1"
    // } else {
    //     elResult.textContent = "player 2"
    // }


    // Zo zijn we wel even bezig...
    // if (player1 == "steen" && player2 == "papier") {
    //     elResult.textContent = "Player 2"
    // }

    // if (player1 == "steen" && player2 == "schaar") {
    //     elResult.textContent = "Player 2"
    // }

    // if (player1 == "steen" && player2 == "steen") {
    //     elResult.textContent = "Player 2"
    // }
}

// Ze roepen de functie makeChoice aan wanneer er wordt geklikt.
// Dit is een function call, geen assignment van makeChoice
// elRock.onclick = makeChoice(event);
elRock.onclick = makeChoice;
elPaper.onclick = makeChoice;
elScissors.onclick = makeChoice;

elRestart.onclick = function () {
    window.location.reload();
}

///////

// const event = {
//     target = ...
//     xOffset = ...
// }

// callOnClickFunction(event)

