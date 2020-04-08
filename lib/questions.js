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
        name: 'employeeRole'
    },
    {
        type: 'input',
        message: 'what is the employees id number',
        name: 'id'
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