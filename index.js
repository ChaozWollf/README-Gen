      
// WHEN I am prompted for information about my application repository  
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions





// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
//     ```


const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
function writeToFile(fileName, data) {
    console.log('writeToFile');
    return fs.writeFileSync(fileName, data)
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your project?'

        },
        // this section was commented out to remind me that this is something I want for future development
        // {
        //     type: 'checkbox',
        //     name: 'options',
        //     message: 'which of the following do you want to include?',
        //     choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contrubuting', 'Tests', 'Questions']

        // },

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
        writeToFile(`README.md`, generateMarkdown({ ...answers}));
        
        });
    // fs.writeFile(`README.md`, template(answers), 
    // (err) =>err ? console.error(err):console.log('Sucess!')
    // );
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

//         function template(answer) {
//             const fileName = `${answers.name}README.md`
//             const data = `
//         # ${answer.name}
        
//         ## Description ${answer.description}
        
        
        
        
//         ## Installation instructions ${answer.installation}

        
        
        
//         ## Usage ${answer.usage}

        
        
//         ## License${answer.license}
       
//         ## Special thanks to these contributors ${answer.contributing}

        
        
        
//         ## Tests ${answer.tests}

//         ## Questions? My Github: github.com/${answer.github}
//                                  ${answers.email}
//         `
//          ;
            
//         module.exports = {
//             fileName,
//             data,
//         };
//         console.log(fileName);
//         console.log(data);
//     }

//     template(answers);
// });
        // TODO: Create a function to write README file
    //    fs.writeFile(`${answer.name}README.md`, generateMarkdown)
    
