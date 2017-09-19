const basicCard = require("./basicCard.js");
const ClozeCard = require("./ClozeCard.js");
const inquirer = require("inquirer");
const basic = require("./basic.json");
const fs = require("fs");

var correct;
var incorrect;
var cardArray = [];
var counter = 0;

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
    if (answers.startGame == "Basic Card") {
        basicPlay("basic.json");
        console.log('index of 0');
    } else if (answers.startGame == "Cloze Card") {
        basicPlay("ClozeCard.json");
        console.log('index of 1');
    } else if (answers.startGame == "Quit") {
        console.log('index of 2');
        quit();
    }

});

function basicPlay(basic, x) {
    fs.readFile(basic, "utf8", function (error, data) {
        if (error) {
            console.log("Error!");
            console.log(data);
        } 
        else if (counter.length < 5) {
            inquirer.prompt([{
                message: basicCard[counter].front + "/n",
                type: "input",
                name: "answer"
            }]).then(function (answers) {
                if (answer.answer.toLowerCase() === question[i].back.toLowerCase()) {
                    correct++;
                    counter++;
                    console.log("Score: " + score);
                }
            })
        } else {
            counter++;
            incorrect++;
        }
    
    })

    
}

function quit() {
    console.log('you just quit');

}
