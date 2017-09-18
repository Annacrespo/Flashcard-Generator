const basicCard = require("./basicCard.js");
const ClozeCard = require("./ClozeCard.js");
const inquirer = require("inquirer");
const fs = require("fs");

console.log(basicCard);
console.log(ClozeCard);
inquirer.prompt([
    {
        message: "What game would you like to play?",
        type: "checkbox",
        choices: ["Basic Card", "Cloze Card", "quit"],
        name: "startGame"
    }
])
    .then(function (answers) {
        var game = answers.startGame[0];
        if (answers.startGame[0] === "Basic Card") {
            play("basic-card.json");
        } else if (answers.startGame[1] === "Cloze Card") {
            play("ClozeCard.json");
    } else if (answers.startGame[3] === "quit") {
            quit();
    }

    });

