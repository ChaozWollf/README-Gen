// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = []
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your project?'

        },
        {
            type: 'checkbox',
            name: 'options',
            message: 'which of the following do you want to include?',
            choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contrubuting', 'Tests', 'Questions']

        },

        {
            type: 'input',
            name: 'Description',
            message: 'Description of Project',
        },

        {
            type: 'input',
            name: 'Installation',
            message: 'Installation instructions'

        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How is this project to be used?'
        },
        {
            type: 'checkbox',
            name: 'License',
            choices: ['MIT', 'None']
        },
        {
            type: 'input',
            name: 'Contriubting',
            message: 'List your Contributors'
        },
        {
            type: '',
            name: 'Tests',
            Message: 'what tests do you want?'
        },

        {
            type: 'input',
            name:'Github',
            message: 'What is your Github username?(this will be used for questions people may have and to use some of your open source code',
        },
        {
            type:'input',
            name:'email',
            message:'what is your email?(this will be used for questions people may have)'
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) =>{
        if (err) {
            consol.error('Error writing file', err);
        } else{
            console.log ('Data written to file sucessfully')
        }
        });
    }
const fileName = `${data.name}README.md`
const data = 
fs.appendFile(fileName,`##${data.name}`, (err) => err? console.log(err): console.log());
fs.appendFile(fileName, `##Description\n ${data.description.input}`, (err) => err? console.log(err):console.log ());
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
