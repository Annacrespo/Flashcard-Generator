const basicCard = require("./basicCard.js");
const ClozeCard = require("./ClozeCard.js");
const inquirer = require("inquirer");
const fs = require("fs");

var correct;
var incorrect;
var cardArray = [];

console.log(basicCard);
console.log(ClozeCard);
inquirer.prompt([
    {
        message: "What game would you like to play?",
        type: "checkbox",
        choices: ["Basic Card", "Cloze Card", "Quit"],
        name: "startGame"
    }
]).then(function (answers) {
        var game = answers.startGame[0];
        if (answers.startGame[0] === "Basic Card") {
            basicPlay("basic-card.json");
        } else if (answers.startGame[1] === "Cloze Card") {
            basicPlay("ClozeCard.json");
    } else if (answers.startGame[3] === "quit") {
            quit();
    }

    });

function basicPlay(basicCard, x) {
    fs.readFile(basic-card.json, "utf8", function(error, data) {
        if (error) {
            console.log("Error!");
        }
    })
}

function quit() {

}