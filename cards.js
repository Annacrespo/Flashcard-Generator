var basicCard = require("./basicCard.js");
var ClozeCard = require("./ClozeCard.js");
var clozeQuestions = require("./ClozeQuestions.js");
var data = require("./basic.js");
var inquirer = require("inquirer");
var fs = require("fs");

var correct = 0;
var incorrect = 0;
var cardArray = [];
var counter = 0;
inquirer.prompt([
    {
        message: "What game would you like to play?",
        type: "checkbox",
        choices: ["Basic Card", "Cloze Card", "Quit"],
        name: "startGame"
    }
]).then(function (answers) {
    if (answers.startGame == "Basic Card") {
        basicPlay("basic.js");
    } else if (answers.startGame == "Cloze Card") {
        ClozePlay("ClozeCard.js");
    } else if (answers.startGame == "Quit") {
        quit();
    }

})

function basicPlay() {
    var question = new basicCard(data[counter].front, data[counter].back);
    //   console.log(data[counter].front, data[counter].back);
    if (counter < 5) {
        inquirer.prompt([
            {
                message: question.front + "\n",
                type: "input",
                name: "answer"
            }
        ]).then(function (answers) {
            if (answers.answer.toLowerCase() == question.back.toLowerCase()) {
                correct++;
                counter++;
                console.log("Correct: " + correct);
            } else {
                counter++;
                incorrect++;
                console.log("Incorrect: " + incorrect);
            }

        })
    }
}

function ClozePlay() {
    var question = new ClozeCard(data[counter].text, data[counter].cloze);
    if (counter < questions.length - 1) {
        inquirer.prompt([
            {
                name: "input",
                message: question.partial + "\nAnswer: "
            }
        ]).then(function (answer) {
            if (answer.input == question.cloze) {
                console.log("That is Correct!\n");
            } else {
                console.log("No, the correct answer is " + question.cloze + "\n");
            }
            counter++;
            ClozePlay();
        });
    } else {
        console.log('Try again!');
    }
}

function quit() {
    console.log("You're done.");
}