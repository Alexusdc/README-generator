// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What is the description?',
        name: 'description',
        default: 'Description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What is your table of contents?',
        name: 'contents',
        default: 'Table of Contents',
        validate: contentsInput => {
            if (contentsInput) {
                return true;
            } else {
                console.log('Please enter your table of contents!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'Please describe the steps required to install your project',
        name: 'installation',
        default: 'Installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter your table of contents!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'Please input your email',
        name: 'usage',
        default: 'Usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your table of contents!');
                return false;
            }
        }
    },    
    
    {
        type: 'input',
        message: 'Please describe the steps needed to use your project',
        name: 'usage',
        default: 'Usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your table of contents!');
                return false;
            }
        }
    },
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, err => {
        if (err) {
          reject(err);
          return;
        };
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then((answers) => {
        writeToFile('answers.md', generateMarkdown(answers));
    })

    .catch((error) => {
        console.log(error);
    })
};

// Function call to initialize app
init();
