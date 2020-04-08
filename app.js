const fs = require('fs');
const inquirer = require('inquirer');

let questions = [
    {
        type: 'input',
        message: 'what is the the employees name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'what is the employees id number',
        name: 'id'
    },
    {
        type: 'confirm',
        message: 'Do you need to add another employee?',
        name: 'anotherEmp'
    }
]

let team = []

function runQuestions(){
    inquirer
        .prompt(questions)
        .then(res => {
            team.push(res)
            if (res.anotherEmp === true){
                runQuestions()
            }
        })
        .catch(error => console.log(error))
    }

    runQuestions()