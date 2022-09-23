// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
    },

    {
        type: 'input',
        message: 'What is your table of contents?',
        name: 'table of contents',
        default: 'Table of Contents',
        validate: contentsInput => {
            if (contentsInput) {
                return true;
            } else {
                console.log('Please enter your table of contents!');
                return false;
            }
    },

    {
        type: 'input',
        message: 'Please describe the steps required to install your project.',
        name: 'installation',
        default: 'Installation',
    },

    {
        type: 'input',
        message: 'Please describe the steps needed to use your project',
        name: 'usage',
        default: 'Usage',
    },

    {
        type: 'input',
        message: 'Please choose from the following licenses to include',
        name: 'licensing',
        default: 'Licensing',
    },
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
