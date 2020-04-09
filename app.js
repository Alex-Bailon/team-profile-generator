const fs = require('fs');
const inquirer = require('inquirer');
const { questions } = require('./lib/questions')
const generateTeam = require('./templates/generateTeam')
const generateHTML = require('./templates/generateHTML')

let block = ''
let team = []

function runQuestions(){
    inquirer
        .prompt(questions)
        .then(res => {
            team.push(res)
            if (res.anotherEmp === true){
                runQuestions()
            }
            else{
                team.forEach( member => {
                    block += generateTeam(member)
                })
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