const fs = require('fs');
const inquirer = require('inquirer');
const { questions } = require('./lib/questions')

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
                console.log(team)
            }
        })
        .catch(error => console.log(error))
}

runQuestions()