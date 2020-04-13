//array of questions that are going to de asked
let questions = [
    {
        type: 'input',
        message: 'What is the employees name?',
        name: 'name'
    },
    {
        type: 'list',
        message: 'What is this employees roll?',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    },
    {
        type: 'input',
        message: 'What is the employees id number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the employees email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the employees office#/github/school?',
        name: 'roleID'
    },
    {
        type: 'confirm',
        message: 'Do you need to add another employee?',
        name: 'anotherEmp'
    }
]
module.exports = {questions}