// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of this project?"
    },
{
    type: "input",
    name: "description",
    message: "Give a brief description of this project"
    },
{
    type: "input",
    name: "installation",
    message: "What are the steps to installing the project?"
    },
{
    type: "input",
    name: "usage",
    message: "How does the user use the project?"
    },
{
    type: "input",
    name: "contributors",
    message: "Link GitHub repos of contributors:",
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
    let readMeString = generateMarkdown(userInput)
    writeToFile ("output/README.md", readMeString)
    })
};

// Function call to initialize app
init();


//Gather User input form Inquirer
//Create a README string
//Format through FS package