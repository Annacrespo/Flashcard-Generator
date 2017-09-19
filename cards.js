const basicCard = require("./basicCard.js");
const ClozeCard = require("./ClozeCard.js");
const inquirer = require("inquirer");
const basic = require("./basic.js");
const clozeQuestions = require("./ClozeQuestions.js")
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
        basicPlay("basic.js");
    } else if (answers.startGame == "Cloze Card") {
        basicPlay("ClozeCard.js");
    } else if (answers.startGame == "Quit") {
        // quit();
    }

})

function basicPlay(basic, x) {
    fs.readFile(basic, "utf8", function (error, data) {
        if (error) {
            console.log("Error!");
            // console.log(data);
        } 
        else if (counter< 5) {
            // console.log(data);
            inquirer.prompt([{
                message: data[counter].front + "/n",
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

};   
// }

// function basicPlay() {
//     var correct;
//     var incorrect;
//     var cardArray = [];
//     for (let question of questions) {

//     }
// }

// function quit() {
//     console.log('you just quit');

// }

// function ClozePlay(){
//     var question = new ClozeCard(clozeQuestions[counter].text, clozeQuestions[counter].cloze);
//     console.log(question);
//     if ( i < questions.length - 1 ) {
//       inquirer.prompt([
//           {
//             name: "input",
//             message: question.partial + "\nAnswer: "
//           }
//         ]).then(function(answer) {
//             if (answer.input == question.cloze) {
//                console.log("YES that is Correct\n" + lineBreak);
//             } else {
//                console.log("No, the correct answer is: \n" + question.cloze + "\n" + lineBreak);
//             }
            
//             counter++;
//             ClozePlay();
//         });
//     } else {
//       console.log('Try again!');
//     }
 