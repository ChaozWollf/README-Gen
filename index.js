// GIVEN a command - line application that accepts user input      
// WHEN I am prompted for information about my application repository  
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
//     ```

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
            name: 'description',
            message: 'Description of Project',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions'

        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this project to be used?'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'None']
        },
        {
            type: 'input',
            name: 'contriubting',
            message: 'List your Contributors'
        },
        {
            type: '',
            name: 'tests',
            Message: 'what tests do you want?'
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?(this will be used for questions people may have and to use some of your open source code',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email?(this will be used for questions people may have)'
        }
    ]).then((answers) => {
        function template(answer) {
            const fileName = `${answers.name}README.md`
            const data = `
        # ${answer.name}
        
        ## Description ${answer.description}
        
        
        
        
        ## Installation instructions ${answer.installation}

        
        
        
        ## Usage ${answer.usage}

        
        
        ## License${answer.license}
       
        ## Special thanks to these contributors ${answer.contributing}

        
        
        
        ## Tests ${answer.tests}

        ## Questions? My Github: github.com/${answer.github}
                                 ${answers.email}
        `
         ;
            
        module.exports = {
            fileName,
            data,
        };
        console.log(fileName);
        console.log(data);
    }

    template(answers);
});
        // TODO: Create a function to write README file
       
    


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();





//EXTRA code to cut out before production:

// fs.writeFile('log.text', `${answers.name}`, (err) => err? console.error(err): console.log('Success!'))

 // function writeToFile(fileName, data) {
        //     fs.writeFile(fileName, data, (err) => {
        //         if (err) {
        //             console.error('Error writing file', err);
        //         } else {
        //             console.log('Data written to file sucessfully')
        //         }
        //     });

        // fs.appendFile(fileName,`##${data.name}`, (err) => err? console.log(err): console.log());
// fs.appendFile(fileName, `##Description\n ${data.description.input}`, (err) => err? console.log(err):console.log ());
