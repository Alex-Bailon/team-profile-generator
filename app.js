//created const for required
const fs = require('fs');
const inquirer = require('inquirer');
const { questions } = require('./lib/questions')
const generateTeam = require('./templates/generateTeam')
const generateHTML = require('./templates/generateHTML')
//empty sting to store html that will be inserted into html generator
let block = ''
//empty array to push all team member info
let team = []
//function to start the program
function runQuestions(){
    inquirer
    //start inquirer to ask all questions
        .prompt(questions)
        .then(res => {
            //after questions are ask push response to team array
            team.push(res)
            //if user answered yes to adding another employee it will start function again
            if (res.anotherEmp === true){
                runQuestions()
            }
            else{
                //once user answered no, for each team member it will generate html and add it to the block
                team.forEach( member => {
                    block += generateTeam(member)
                })
                //will take the block and insert into generateHTML and write the HTML
                fs.writeFile('./templates/index.html', generateHTML(block), function(err) {
                    if (err) {
                      return console.log(err);
                    }
                })            
            }
        })
        .catch(error => console.log(error))
}

runQuestions()